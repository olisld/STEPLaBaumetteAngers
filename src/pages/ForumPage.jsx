import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, addDoc, serverTimestamp } from "firebase/firestore";
import useAuth from "../hooks/useAuth";
import styled from "styled-components";

// 🌟 Styled Components
const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const ThreadList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ThreadItem = styled.li`
  background: #f5f5f5;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
`;

const Button = styled.button`
  display: block;
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 0 auto 20px auto;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

const Warning = styled.p`
  color: #d32f2f;
  text-align: center;
  margin-bottom: 20px;
`;

const Loader = styled.p`
  text-align: center;
  font-style: italic;
`;

const Form = styled.form`
  background: #ffffff;
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 30px;
  border-radius: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  font-size: 16px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  height: 100px;
  margin-bottom: 15px;
  font-size: 16px;
`;

const ForumPage = () => {
  const user = useAuth();
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "threads"));
        const threadsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setThreads(threadsData);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors du chargement des threads :", error);
      }
    };

    fetchThreads();
  }, []);

  const handleCreateThread = async (e) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) {
      alert("Merci de remplir tous les champs !");
      return;
    }

    try {
      await addDoc(collection(db, "threads"), {
        title: newTitle,
        content: newContent,
        author: user.email || "Anonyme",
        createdAt: serverTimestamp(),
      });
      alert("Discussion créée avec succès !");
      setNewTitle("");
      setNewContent("");
      setShowForm(false);
      window.location.reload(); // Simple pour recharger les threads rapidement
    } catch (error) {
      console.error("Erreur lors de la création du thread :", error);
      alert("Erreur lors de la création du thread.");
    }
  };

  return (
    <Container>
      <Title>Forum de Discussion</Title>

      {user ? (
        <>
          <Button onClick={() => setShowForm(!showForm)}>
            {showForm ? "Annuler" : "➕ Créer une discussion"}
          </Button>

          {showForm && (
            <Form onSubmit={handleCreateThread}>
              <Input
                type="text"
                placeholder="Titre de la discussion"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                required
              />
              <Textarea
                placeholder="Contenu de la discussion"
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                required
              />
              <Button type="submit">Publier</Button>
            </Form>
          )}
        </>
      ) : (
        <Warning>Connecte-toi pour créer une nouvelle discussion.</Warning>
      )}

      <hr />

      {loading ? (
        <Loader>Chargement des discussions...</Loader>
      ) : (
        <ThreadList>
          {threads.length > 0 ? (
            threads.map(thread => (
              <ThreadItem key={thread.id}>
                <strong>{thread.title}</strong><br />
                <small>Posté par : {thread.author || "Anonyme"}</small>
              </ThreadItem>
            ))
          ) : (
            <Loader>Aucune discussion pour l'instant.</Loader>
          )}
        </ThreadList>
      )}
    </Container>
  );
};

export default ForumPage;