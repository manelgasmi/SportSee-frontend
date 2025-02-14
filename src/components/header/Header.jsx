
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="NavBar">
      <Link className="logo" to="/"><img src="/src/assets/images/logo.png" alt="Logo" width="170"/></Link>
      <Link to="/"><h3>Accueil</h3></Link>
      <Link to="/"><h3>Profil</h3></Link>
      <Link to="/"><h3>Réglages</h3></Link>
      <Link to="/"><h3>Communauté</h3></Link>
    </nav>
  );
};

export default Header;
