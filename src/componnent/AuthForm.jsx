import React, { useState } from "react";
import styled from "styled-components";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

// 🌟 Styled Components
const Container = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  margin-top: 10px;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

const SwitchButton = styled(Button)`
  background-color: #2196f3;
  margin-top: 20px;
  &:hover {
    background-color: #1976d2;
  }
`;

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState(""); // Pour le pseudo
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        // Inscription
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Ajouter l'utilisateur dans la collection "users"
        await setDoc(doc(db, "users", user.uid), {
          displayName: displayName,
          email: email,
          role: "user", // Par défaut
          createdAt: new Date(),
        });

        alert("Compte créé avec succès !");
      } else {
        // Connexion
        await signInWithEmailAndPassword(auth, email, password);
        alert("Connexion réussie !");
      }
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  };

  return (
    <Container>
      <Title>{isRegistering ? "Inscription" : "Connexion"}</Title>
      <Form onSubmit={handleSubmit}>
        {isRegistering && (
          <Input
            type="text"
            placeholder="Votre nom"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
          />
        )}
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">
          {isRegistering ? "Créer un compte" : "Se connecter"}
        </Button>
      </Form>
      <SwitchButton onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? "Déjà inscrit ? Se connecter" : "Pas encore de compte ? S'inscrire"}
      </SwitchButton>
    </Container>
  );
};

export default AuthForm;