
import styled from "styled-components";
import { useState } from "react"
import { Link } from "react-router-dom";
import { carrousel } from "../Data";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import leftArrow from '../assets/arrow-left-square.svg'
import rightArrow from '../assets/arrow-right-square.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import nuage from '../assets/nuage_dialogue.png'
import goutte from '../assets/goute_step.png'


const StyleDiv1 =styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;
  width:50%;
  height:100%;
  opacity: ${(props) => (props.isAnimating ? 0 : 1)};
  transition: opacity 0.5s ease-in-out;
  position:relative;
  background-image: url(${nuage});
 background-position: 4px -39px; /* Déplace l'image plus à gauche et plus en haut */
  background-size:90%;
  background-repeat: no-repeat; /* Empêche la répétition de l'image */
`
const StyleParagraphe=styled.p`
  width:60%;

`
const StyleDiv2=styled.div`
  width:50%;
  height:100%;
  opacity: ${(props) => (props.isAnimating ? 0 : 1)};
  transition: opacity 0.5s ease-in-out;
  // background-size: cover;
  // margin-left:50px;
`
const StyleImg=styled.img`
  width:100%;
  height:100%;

`
const StyleHome=styled.div`
  width:100%;
  height:auto;
  background-color: #e8f0f8;
`
const DisplayHome=styled.div`
  display:flex;
  height:70vh;
  background-color:	#DBDBDB;
   overflow: visible; /* Permet au contenu de dépasser */
`
const StyleDivFleche=styled.div`
  display:flex;
  justify-content:center;
  gap:60px;
  width:100%;
  height:70px;
  align-items:center;
  background-color:	#ABABAB;
`
const StyleFlecheleft=styled.img`
height:40px;
width:40px;
padding:5px;
transition: transform 0.3s, background-color 0.3s;
border-radius:4px;
// margin-left:50px;
&: hover{
  background-color:#9B9B9B;
  transform: scale(1.25);
  cursor:pointer;
}

`
const StyleFlecheright=styled.img`
height:40px;
width:40px;
padding:5px;
transition: transform 0.3s, background-color 0.3s;
border-radius:4px;
&: hover{
  background-color:#9B9B9B;
  transform: scale(1.25);
  cursor:pointer;
}
`
const StyledButton=styled.button`
  background-color:#ABABAB;
  border:0px solid black;
`

const StyledGoutteImG =styled.img`
    width:70px;
    heighgt:auto;

    &.goute{
      position:relative;
      left:15px
    }
`
const DisplayDivGoutte =styled.div`
  display:flex;
  justify-content:end;
  width:100%;
  position:relative;
  z-index:1;
`

const DivNuageDialogue =styled.div`

`
const ParentDivNuageDialogue= styled.div`
  
  position: relative; /* Nécessaire pour gérer les débordements */
  width: 100%; /* Assurez-vous que la largeur est suffisante */
  height: auto; /* Adapte la hauteur automatiquement */
  overflow: visible; /* Permet le dépassement */
  padding:20px 50px 0px 50px ; /* Ajoutez du padding si nécessaire pour agrandir la zone d'affichage */
  z-index:100;
`

function Home() {
  const [currentSlide,setSlide]=useState(1)
  const [isAnimating, setIsAnimating] = useState(false);


// const sisrOption3 = InfoBts.find(item => item.id === '3');

    function FindInfo(idNumber){
        return carrousel.find(item=>item.id===idNumber.toString())
    }

    function changeSlide(direction) {
      setIsAnimating(true);
      setTimeout(() => {
        setSlide((prevSlide) =>
          direction === "prev"
            ? prevSlide > 1
              ? prevSlide - 1
              : carrousel.length
            : prevSlide < carrousel.length
            ? prevSlide + 1
            : 1
        );
        setIsAnimating(false);
      }, 500); // Durée de l'animation
    }

    const currentOption= FindInfo(currentSlide)
  return (
    <StyleHome>

      <DisplayHome>

        <StyleDiv1 isAnimating={isAnimating}>
          <ParentDivNuageDialogue>
            <DivNuageDialogue className="d-flex flex-column align-items-center">
              <h2 className="mb-3">{currentOption.title}</h2>
              <StyleParagraphe>{currentOption.content}</StyleParagraphe>
            </DivNuageDialogue>
          </ParentDivNuageDialogue>
          
          
          <DisplayDivGoutte className="mb-3">
            <StyledGoutteImG src={currentOption.asset1} alt="waterForce" className={currentOption.asset1 === goutte ? 'goute' : 'default'}/>
          </DisplayDivGoutte>
          
        </StyleDiv1>

        <StyleDiv2 isAnimating={isAnimating}>
          <StyleImg src={currentOption.asset2}/>
          
        </StyleDiv2>

      </DisplayHome>

      
      <StyleDivFleche>
        <StyledButton onClick={()=>changeSlide('prev')}><StyleFlecheleft src={leftArrow} alt="" /></StyledButton>
        <StyledButton onClick={()=>changeSlide('next')}><StyleFlecheright src={rightArrow} alt="" /></StyledButton>
        
        
      </StyleDivFleche>
      

      <div>
        Contact sur les réseaux
        <Link to="/Mention_legal">Mention Légal</Link>
      </div>


    </StyleHome>
  );
}

export default Home;
