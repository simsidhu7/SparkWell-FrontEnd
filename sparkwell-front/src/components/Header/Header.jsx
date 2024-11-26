import "./Header.scss";
import { Link } from "react-router-dom";
import logoImage from "../../assets/images/SparkWellLogo.png";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img
            className="header__logo-image"
            src={logoImage}
            alt="SparkWell Logo"
          />
        </Link>
      </div>

      <div className="header__home">
        <Link to="/" className="header__home-link">
          <span className="header__home-button">Home</span>
        </Link>
      </div>

      <div className="header__button-container">
        <Link to="/About" className="header__link">
          <span className="header__button">About</span>
        </Link>
      </div>
      <div className="journal">
        <Link to="/JournalEntries" className="journal__link">
          <span className="journal__button-header">Journal Entries</span>
        </Link>
      </div>
    </header>
  );
}
export default Header;
