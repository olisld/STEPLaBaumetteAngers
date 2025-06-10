
// Importation de la bibliothèque React pour pouvoir créer des composants React
import React from "react";
// Importation du composant AuthForm qui gère le formulaire d'authentification (connexion/inscription)
import AuthForm from "../componnent/AuthForm";
// Définition d'un composant fonctionnel AuthPage
const AuthPage = () => {
  return (
    <div>
      {/* Intégration du composant AuthForm qui contient le formulaire */}
      <AuthForm />
    </div>
  );
};
// Exportation du composant AuthPage pour qu'il soit réutilisable dans d'autres parties de l'application
export default AuthPage;