import styled from "styled-components";
import OrganigrammeSTEP from "../assets/OrganigrammeStep.png"

const ContainerPage = styled.div`
    width: 100%;
    background-color: #e8f0f8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
`;

const Titre = styled.h1`
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #2c3e50;
    text-align: center;
`;


const StyleImage = styled.img`
    width: 100%;
    max-width: 1000px;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;
function Equipe(){

    return(
        <ContainerPage>
            <Titre>Equipe de la Station de la baumette</Titre>
            <StyleImage src= {OrganigrammeSTEP} alt="Organigramme"/>
        </ContainerPage>
        
    )
}

export default Equipe;