import styled from "styled-components"
import { signOut } from "firebase/auth"; 
import { auth } from "../firebase"; 
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom"; 
// image
import logo from "../assets/Veolia.png"
import angers_logo from "../assets/logo_angers_loire_metropole.svg"
import menu from '../assets/list.svg'
import { useState,useEffect,useRef } from "react"
import { Link } from "react-router-dom"
const StyleHeader=styled.div`
    width:100%;
    height:60px;
    background-color:#414141;
`
const StyleH1=styled.div`
    margin:0;
    white-space: nowrap;
    color:white;
    margin-left:30px;
`
const DisplayHeader=styled.div`
    margin-left:10px;
    height:100%;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
`

const StyleImg=styled.img`
    width:100px;
    height:auto;
    margin-bottom:5px;
    margin-right:5px;
`

const StyleLogo=styled.div`
    display: flex;
    align-items: center;
    height:100%;
    width:100%;
`
const StyleDIvLogo=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:white;
    width:125px;
    height:40px;
    border-radius:20px;
    margin-left:60px;
    
`
const DisplayMenu=styled.div`
    background-color: ${(props) => (props.isClicked ? "white" : "transparent")};
    border-radius:4px;
    color:white;
    display:flex;
    align-items:center;
    height:100%;
    &:hover {
        background-color:white;
    };
`
const StyleMenu=styled.img`
width:${(props) => (props.isClicked ? "50px" : "40px")};
height:${(props) => (props.isClicked ? "50px" : "40px")};;
margin-right:20px;
transition: all 0.3s ease;
&:hover {
  width: 50px;
  height: 50px;
  cursor:pointer;
}
`
const DropdownMenu = styled.div`
  background-color: #414141;
  color: white;
  padding-top:10px;
  position: absolute;
  top: 110%; /* Pour positionner juste sous le bouton */
  left: -140px;
  width: 200px;
  border: 1px solid #313131;
  border-radius: 0px 0px 0px 4px;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) =>
    props.isVisible ? "translateY(0)" : "translateY(-10px)"};
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: ${(props) => (props.isVisible ? "auto" : "none")};
`;
const StyleList=styled.ul`
    list-style: none; 
    margin: 0; 
    padding: 0;
    li:last-child {
    margin:0; 
    border-bottom:1px solid #414141; 
  }
`
const StyleLi=styled.li`
    margin-bottom:10px;
    border-bottom:1px solid #313131;
    padding: 10px;
    text-align:center;
`
const StyledLink=styled(Link)`
    text-decoration:none;
    color:inherit

`

function Header(){
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const user = useAuth(); 
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
    setIsClicked((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      // Si le clic est en dehors du menu
      setDropdownVisible(false);
      setIsClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
  try {
    await signOut(auth);
    alert("Déconnecté avec succès !");
    navigate("/"); // Redirection vers la page d'accueil
  } catch (error) {
    console.error("Erreur lors de la déconnexion :", error);
    alert("Erreur lors de la déconnexion");
  }
  };

    return(
        <StyleHeader>
            <DisplayHeader>
                <StyleLogo>
                    <a href="https://www.veolia.com/fr"><StyleImg src={logo} alt="logo-Veolia"/></a>
                    
                    <StyleDIvLogo>
                        <a href="https://www.angersloiremetropole.fr/"><StyleImg src={angers_logo} alt="logo-Veolia"/></a>
                    </StyleDIvLogo>
                </StyleLogo>
                {user && (
                  <p style={{ color: "white", marginRight: "20px" }}>
                    Bienvenue {user.email}
                  </p>
                )}
                <div style={{ position: "relative" }} ref={dropdownRef}>
                <DisplayMenu onClick={toggleDropdown}  isClicked={isClicked}>
                    <StyleMenu src={menu} alt="" isClicked={isClicked}/>
                </DisplayMenu>
                <DropdownMenu isVisible={isDropdownVisible} >
                    <StyleList>
                        <StyleLi><StyledLink to='/'>Accueil</StyledLink> </StyleLi>
                        <StyleLi><StyledLink to='/equipe' >Nos équipes</StyledLink> </StyleLi>
                        <StyleLi><StyledLink to='/chiffres'>Quelques chiffre</StyledLink> </StyleLi>
                        <StyleLi><StyledLink to='/forumPage'>Forum</StyledLink> </StyleLi>
                        {user ? (
                          <StyleLi onClick={handleLogout} style={{ cursor: "pointer" }}>
                            Se déconnecter
                          </StyleLi>
                        ) : (
                          <StyleLi><StyledLink to="/authentification">Se connecter</StyledLink></StyleLi>
                        )}
                    </StyleList>
                </DropdownMenu>
                </div>
                
            </DisplayHeader>
        </StyleHeader>
    )    
}

export default Header