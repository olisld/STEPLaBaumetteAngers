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
  background: #e8f0f8;
  min-height: 100vh;
  padding: 60px 20px;
  font-family: 'Segoe UI', sans-serif;
`;

const Titre = styled.h1`
  color: #0f172a;
  font-size: 2.8rem;
  margin-bottom: 50px;
  text-align: center;
`;

const CartesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1200px;
`;

const Carte = styled.div`
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  padding: 25px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
`;

const TitreCarte = styled.h2`
  font-size: 1.4rem;
  color: #1e293b;
  margin-bottom: 20px;
`;

const ImgIcone = styled.img`
  width: 80%;
  height: auto;
  max-height: 200px;
  border-radius: 12px;
  object-fit: cover;
  margin-bottom: 20px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
`;

const Paragraphe = styled.p`
  font-size: 1.05rem;
  color: #334155;
  line-height: 1.6;
  margin: 10px 0 20px 0;
`;

const ImgAffichée = styled.img`
  width: 100%;
  max-height: 250px;
  object-fit: contain;
  border-radius: 10px;
  margin-top: auto;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
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
            <ImgAffichée src={item.image} alt={`Tableau ${item.titre}`} />
          </Carte>
        ))}
      </CartesContainer>
    </PageContainer>
  );
}

export default Chiffres;