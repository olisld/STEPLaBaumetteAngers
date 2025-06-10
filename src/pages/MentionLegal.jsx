import styled from "styled-components"
const Container = styled.div`
  max-width: 900px;
//   margin: 3rem auto;
  padding: 2rem;
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: #2c3e50;
`;

const Text = styled.p`
  margin: 0.5rem 0;
`;
const Background= styled.div`
    background-color:#e8f0f8;
    display:flex;
    justify-content:center;
    align-items:center;
    padding: 40px 20px;
`

function MentionLégal() {
  return (

    <Background>
        <Container>
        <Title>Mentions légales</Title>

        <Section>
            <SectionTitle>Éditeur et responsable de la publication</SectionTitle>
            <Text>Le site est édité par Olivier Soulard, responsable de la publication.</Text>
            <Text>Contact : olivier.soulard4@gmail.com</Text>
            <Text>Le site a été développé à des fins informatives et pédagogiques.</Text>
        </Section>

        <Section>
            <SectionTitle>Hébergement</SectionTitle>
            <Text>Ce site est hébergé par :</Text>
            <Text>OVH SAS — 2 rue Kellermann – 59100 Roubaix – France</Text>
            <Text>Site web : <a href="https://www.ovh.com" target="_blank" rel="noopener noreferrer">www.ovh.com</a></Text>
        </Section>

        <Section>
            <SectionTitle>Responsabilité</SectionTitle>
            <Text>
                Les informations présentées sont fournies à titre indicatif.
                La station de la Baumette ne saurait être tenue responsable des erreurs ou omissions ou de l’usage fait des informations diffusées.
            </Text>
        </Section>

        <Section>
            <SectionTitle>Propriété intellectuelle</SectionTitle>
            <Text>Tous les éléments du site (textes, images, logos, etc.) sont protégés par les lois sur la propriété intellectuelle. Toute reproduction sans autorisation écrite est interdite, sauf courte citation avec mention de la source.</Text>
        </Section>

        <Section>
            <SectionTitle>Conditions d’utilisation</SectionTitle>
            <Text>L'utilisateur s'engage à utiliser ce site de manière responsable et conforme aux lois en vigueur.</Text>
        </Section>

        <Section>
            <SectionTitle>Données personnelles et cookies</SectionTitle>
            <Text>Le site utilise Firebase pour stocker et traiter certaines données (ex : formulaires, authentification, messages ou contributions).</Text>
            <Text>Conformément au Règlement Général sur la Protection des Données (RGPD) :</Text>
            <ul>
                <li>Les données collectées sont strictement nécessaires à l'objectif défini.</li>
                <li>Aucune donnée personnelle sensible n'est collectée sans consentement explicite.</li>
                <li>Les utilisateurs peuvent demander la modification ou suppression de leurs données à tout moment, en écrivant à :olivier.soulard4@gmail.com.</li>
            </ul>
        </Section>
        </Container>
    </Background>
  );
}

export default MentionLégal;