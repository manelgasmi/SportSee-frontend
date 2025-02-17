import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-black text-white flex justify-between py-4 px-8 items-center shadow-[2px_2px_7px_2px_rgba(0,0,0,0.62)]">
      <Link className="flex justify-center items-center" to="/">
        <img src="/src/assets/images/logo.png" alt="Logo" width="170" />
      </Link>
      <Link to="/">
        <h3 className="text-2xl">Accueil</h3>
      </Link>
      <Link to="/">
        <h3 className="text-2xl">Profil</h3>
      </Link>
      <Link to="/">
        <h3 className="text-2xl">Réglages</h3>
      </Link>
      <Link to="/">
        <h3 className="text-2xl">Communauté</h3>
      </Link>
    </nav>
  );
};

export default Header;
