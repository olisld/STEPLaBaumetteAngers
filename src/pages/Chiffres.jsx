import styled from "styled-components";
// import des tableaux de caractéristique
import traitementRefus from '../assets/Traitement_des_refus.png'
import traitementBoues from '../assets/traitement_des_boues.png'
import productionBiogaz from '../assets/Production_biogaz.png'
import consoAnnuel  from '../assets/Consomation_annuel.png'
import caracteristique from '../assets/Caractéristique.png'
import traitementEaux from '../assets/Traitement_des_eaux.png'
// import des images des caractéristiques
import refus from '../assets/RefusImg.jpg'
import { useState,useRef } from "react";

const  DivDisplayCenter = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100vw;
    height:100%;
`
const OrganisationDifférentChiffres= styled.div`
    display:flex;
    justify-content:space-around;
    flex-wrap: wrap; /* Permet de revenir à la ligne */
    gap: 20px; /* Optionnel : Espace entre les éléments */

`
const DivChiffres =styled.div`
    background-color:#414141;
    border-radius:5px;
    color:white;
    text-align:center;
    height:100px;
    width:410px;
    transition: transform 0.5s;
    &:hover{
        cursor:pointer;
        transform:scale(1.5);
    }
`
const ImgCaract =styled.img`
    width:50px;
    height:50px;
    border-radius:10px;

`

function Chiffres(){

    const [selectDiv,setSelectDiv]=useState(null);
    const divRefs=useRef([]);
    function handleclick(index){
        setSelectDiv(index === selectDiv ? null : index);
        // Si une référence existe, scroller vers la div cliquée
    if (divRefs.current[index]) {
        divRefs.current[index].scrollIntoView({
          behavior: "smooth", // Animation fluide
          block: "center", // Centre verticalement dans la fenêtre
          inline: "center", // Centre horizontalement si nécessaire
        });
      }
    }

    const data = [
        { title: "Caractéristique de la station", imgSrc: caracteristique,imgDescription:"" },
        { title: "Traitement des eaux", imgSrc: traitementEaux ,imgDescription:""},
        { title: "Normes de rejet", imgSrc: "" ,imgDescription:""},
        { title: "Traitement des refus", imgSrc: traitementRefus,imgDescription:refus},
        { title: "Traitement des boues", imgSrc: traitementBoues,imgDescription:""},
        { title: "Production de Biogaz", imgSrc: productionBiogaz,imgDescription:""},
        { title: "Consommations annuel", imgSrc: consoAnnuel,imgDescription:""},
    ]
    return(
        <DivDisplayCenter>
            <div><h1>Quelques chiffres</h1></div>
            
            <OrganisationDifférentChiffres>
               {data.map((item,index)=>(
                    <DivChiffres key={index} ref={(el) => (divRefs.current[index] = el)} onClick={()=>handleclick(index)}>
                        <h2>{item.title}</h2>
                        <ImgCaract src={item.imgDescription} alt={item.title} />
                        {selectDiv === index && item.imgSrc && (        
                            <img src={item.imgSrc} alt={item.title} />
                        )}
                    </DivChiffres>
                ))}
            </OrganisationDifférentChiffres>

        </DivDisplayCenter>
    )
}
export default Chiffres;

// import { useState } from "react";
// import styled from "styled-components";
// // import des images
// import traitementRefus from "../assets/Traitement_des_refus.png";
// import traitementBoues from "../assets/traitement_des_boues.png";
// import productionBiogaz from "../assets/Production_biogaz.png";
// import consoAnnuel from "../assets/Consomation_annuel.png";
// import caracteristique from "../assets/Caractéristique.png";
// import traitementEaux from "../assets/Traitement_des_eaux.png";

// const DivDisplayCenter = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100vw;
//   height: 100vh;
//   overflow: hidden; /* Masque le contenu débordant */
// `;

// const OrganisationDifférentChiffres = styled.div`
//   display: flex;
//   justify-content: space-around;
//   flex-wrap: wrap; /* Permet de revenir à la ligne */
//   gap: 20px; /* Optionnel : Espace entre les éléments */
//   ${({ zoom }) =>
//     zoom &&
//     `
//     display: none; /* Masque les autres divs si une div est zoomée */
//   `}
// `;

// const DivChiffres = styled.div`
//   background-color: #414141;
//   border-radius: 5px;
//   color: white;
//   text-align: center;
//   transition: all 0.5s ease;
//   cursor: pointer;
//   width: 200px;
//   height: 200px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;

//   ${({ isZoomed }) =>
//     isZoomed &&
//     `
//     position: fixed;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%) scale(2); /* Zoom et centrage */
//     width: 400px;
//     height: 400px;
//     z-index: 10;
//   `}
// `;

// const ImgCaract = styled.img`
//   width: 50px;
//   height: 50px;
//   border-radius: 10px;

//   ${({ isZoomed }) =>
//     isZoomed &&
//     `
//     width: 100px;
//     height: 100px;
//   `}
// `;

// function Chiffres() {
//   const [zoomIndex, setZoomIndex] = useState(null);

//   function handleClick(index) {
//     setZoomIndex(index === zoomIndex ? null : index); // Permet de sortir du mode zoom
//   }

//   const data = [
//     { title: "Caractéristique de la station", imgSrc: caracteristique },
//     { title: "Traitement des eaux", imgSrc: traitementEaux },
//     { title: "Normes de rejet", imgSrc: "" },
//     { title: "Traitement des refus", imgSrc: traitementRefus },
//     { title: "Traitement des boues", imgSrc: traitementBoues },
//     { title: "Production de Biogaz", imgSrc: productionBiogaz },
//     { title: "Consommations annuel", imgSrc: consoAnnuel },
//   ];

//   return (
//     <DivDisplayCenter>
//       <div>
//         <h1>Quelques chiffres</h1>
//       </div>

//       <OrganisationDifférentChiffres zoom={zoomIndex !== null}>
//         {data.map((item, index) => (
//           <DivChiffres
//             key={index}
//             isZoomed={zoomIndex === index}
//             onClick={() => handleClick(index)}
//           >
//             <h2>{item.title}</h2>
//             <img src={item.imgSrc} alt={item.title} />
//           </DivChiffres>
//         ))}
//       </OrganisationDifférentChiffres>

//       {zoomIndex !== null && (
//         <button
//           onClick={() => setZoomIndex(null)}
//           style={{
//             position: "fixed",
//             top: "10px",
//             right: "10px",
//             padding: "10px 20px",
//             backgroundColor: "#fff",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//             zIndex: 20,
//           }}
//         >
//           Fermer
//         </button>
//       )}
//     </DivDisplayCenter>
//   );
// }

// export default Chiffres;
