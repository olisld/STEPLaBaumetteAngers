import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import styled from "styled-components";
import { collection, addDoc, onSnapshot,query,orderBy } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// 🌟 Styled Components
const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 28px;
  text-align: center;
  margin-bottom: 20px;
`;

const Content = styled.p`
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  font-size: 18px;
  line-height: 1.6;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Author = styled.small`
  display: block;
  margin-top: 15px;
  text-align: right;
  color: #555;
`;

const Loader = styled.p`
  text-align: center;
  font-style: italic;
`;

const ErrorMessage = styled.p`
  text-align: center;
  color: #d32f2f;
  font-weight: bold;
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 30px;
  text-align: center;
  background-color: #4caf50;
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  &:hover {
    background-color: #45a049;
  }
`;
const Form = styled.form`
  margin-top: 30px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  margin-top: 10px;
  background-color: #2196f3;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #1976d2;
  }
`;
const RepliesSection = styled.div`
  margin-top: 50px;
`;

const RepliesTitle = styled.h3`
  font-size: 24px;
  text-align: center;
  margin-bottom: 30px;
  color: #222;
`;

const NoReply = styled.p`
  text-align: center;
  font-style: italic;
  color: #888;
  font-size: 16px;
`;
const CenteredDiv = styled.div`
  text-align: center;
  margin-top: 30px;
`;

const ReplyContent = styled.div`
  background: #f5f5f5;
  padding: 16px;
  border-radius: 8px;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
`;
  const formatDate = (timestamp) => {
    if (!timestamp || !timestamp.toDate) return null;
    const date = timestamp.toDate();
    return date.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

const ReplyItem = ({ reply }) => {
  const formattedDate = formatDate(reply.createdAt);

  return (
    <ReplyContent>
      {reply.content}
      <Author>
        Par : {reply.author || "Anonyme"}
        {formattedDate && ` le ${formattedDate}`}
      </Author>
    </ReplyContent>
  );
};

const ThreadPage = () => {
  const { id } = useParams();
  const [thread, setThread] = useState(null);
  const [loading, setLoading] = useState(true);

  const [reply, setReply] = useState("");
  const [replies, setReplies] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchThread = async () => {
      try {
        const docRef = doc(db, "threads", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setThread({ id: docSnap.id, ...docSnap.data() });
        } else {
          setThread(null);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération du thread :", error);
        setThread(null);
      } finally {
        setLoading(false);
      }
    };
    fetchThread();
  }, [id]);

  useEffect(() => {
    const repliesRef = collection(db, "threads", id, "replies");
    const q = query(repliesRef, orderBy("createdAt", "asc")); // tri croissant

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedReplies = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReplies(fetchedReplies);
    });

    return () => unsubscribe();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!reply.trim()) return;
    setSubmitting(true);
      const auth = getAuth();
      const user = auth.currentUser;
    try {
      await addDoc(collection(db, "threads", id, "replies"), {
        content: reply,
        createdAt: new Date(),
        author: user?.displayName || user?.email// tu peux remplacer ça par le nom réel de l'utilisateur connecté
      });
      setReply("");
    } catch (error) {
      console.error("Erreur lors de l'envoi de la réponse :", error);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <Loader>Chargement de la discussion...</Loader>;
  if (!thread) return <ErrorMessage>Discussion non trouvée.</ErrorMessage>;



const createdAtFormatted = formatDate(thread.createdAt);
// const createdAtReplies = formatDate(replies.createdAt)
  return (
  <Container>
    <Title>{thread.title}</Title>
    <Content>{thread.content}</Content>
    <Author>
    Posté par : {thread.author || "Anonyme"}
    {createdAtFormatted && ` le ${createdAtFormatted}`}
    </Author>

    <RepliesSection>
      <RepliesTitle>Réponses</RepliesTitle>
      {replies.length === 0 ? (
        <NoReply>Aucune réponse pour le moment.</NoReply>
      ) : (
         replies.map((reply) => <ReplyItem key={reply.id} reply={reply} />)
      )}
    </RepliesSection>

    <Form onSubmit={handleSubmit}>
      <RepliesTitle>Répondre à la discussion</RepliesTitle>
      <Textarea
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        placeholder="Écris ta réponse ici..."
        required
      />
      <SubmitButton type="submit" disabled={submitting}>
        {submitting ? "Envoi..." : "Envoyer"}
      </SubmitButton>
    </Form>

    <CenteredDiv>
      <BackLink to="/forumPage">← Retour au forum</BackLink>
    </CenteredDiv>
  </Container>
 );
};

export default ThreadPage;