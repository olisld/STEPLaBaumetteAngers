import styled from "styled-components";
import traitementRefus from '../assets/Traitement_des_refus.png';
import traitementBoues from '../assets/traitement_des_boues.png';
import productionBiogaz from '../assets/Production_biogaz.png';
import caracteristique from '../assets/Caractéristique.png';
import traitementEaux from '../assets/Traitement_des_eaux.png';

import refus from '../assets/RefusImg.jpg';
import PhotoStep from "../assets/STEP.jpg";
import ImagesTraitementDesEaux from '../assets/Traitement_des_eaux_images.jpg';
import BouesEpuration from "../assets/boue-epuration.jpg";
import PhotoBiogaz from "../assets/imagesBiogaz.jpg";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to bottom, #e0f2fe, #f0f9ff);
  min-height: 100vh;
  padding: 60px 20px;
  font-family: 'Segoe UI', sans-serif;
`;

const Titre = styled.h1`
  color: #0f172a;
  font-size: 3rem;
  margin-bottom: 40px;
  text-align: center;
  font-weight: 700;
`;

const CartesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 900px;
`;

const Carte = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  }
`;

const TitreCarte = styled.h2`
  font-size: 1.8rem;
  color: #1e293b;
  margin-bottom: 15px;
  text-align: center;
`;

const ImgIcone = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 14px;
  object-fit: cover;
  margin-bottom: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
`;

const Paragraphe = styled.p`
  font-size: 1.1rem;
  color: #334155;
  line-height: 1.7;
  text-align: justify;
  margin-bottom: 20px;
`;

const ImgAffichée = styled.img`
  width: 100%;
  max-width: 700px;
  height: auto;
  border-radius: 14px;
  object-fit: contain;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
`;

function Chiffres() {
  const données = [
    {
      titre: "Caractéristique de la station",
      icone: PhotoStep,
      image: caracteristique,
      content:
        "Mise en service en 2009, la station d’épuration de la Baumette à Angers est une installation compacte par biofiltration, conçue pour 285 000 équivalents-habitants.",
    },
    {
      titre: "Traitement des eaux",
      icone: ImagesTraitementDesEaux,
      image: traitementEaux,
      content:
        "Environ 30 000 m³ d’eau sont traités chaque jour à la Baumette, soit l’équivalent de 12 piscines olympiques remplies quotidiennement, ou de 30 millions de bouteilles d'eau d’un litre.",
    },
    {
      titre: "Traitement des refus",
      icone: refus,
      image: traitementRefus,
      content:
        "L’eau usée contient des déchets solides, éliminés dès l’entrée de la station grâce à des équipements comme les dégrilleurs et le dessableur, permettant de récupérer les refus et le sable.",
    },
    {
      titre: "Traitement des boues",
      icone: BouesEpuration,
      image: traitementBoues,
      content:
        "Les boues issues du traitement des eaux sont épaissies, déshydratées puis valorisées en agriculture ou éliminées selon leur qualité.",
    },
    {
      titre: "Production de Biogaz",
      icone: PhotoBiogaz,
      image: productionBiogaz,
      content:
        "Lors du traitement des boues, du biogaz est produit par méthanisation puis récupéré et injecté dans le réseau GRDF pour être valorisé en énergie.",
    },
  ];

  return (
    <PageContainer>
      <Titre>Quelques chiffres</Titre>
      <CartesContainer>
        {données.map((item, index) => (
          <Carte key={index}>
            <TitreCarte>{item.titre}</TitreCarte>
            <ImgIcone src={item.icone} alt={`Illustration de ${item.titre}`} />
            <Paragraphe>{item.content}</Paragraphe>
            <ImgAffichée src={item.image} alt={`Données ou graphique ${item.titre}`} />
          </Carte>
        ))}
      </CartesContainer>
    </PageContainer>
  );
}

export default Chiffres;