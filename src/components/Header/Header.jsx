import { useContext } from "react";
import logo from "../../../images/logo.svg";
import { NavLink } from "react-router-dom";
import { CurrentContext } from "../../contexts/CurrentContext";

function Header() {
  const { isLogedIn, handleLogout } = useContext(CurrentContext);

  return (
    <>
      <header className="header">
        <div className="header__content">
          <div className="header__logo">
            <img src={logo} alt="logo-clinica" className="header__image" />
            <h1 className="header__tittle">Clínica del Ángel</h1>
          </div>
          <nav>
            <ul className="header__index">
              <li>
                <NavLink className="header__index-element" to="/">
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink className="header__index-element" to="/appointment">
                  Citas
                </NavLink>
              </li>
              {isLogedIn ? (
                <li>
                  <NavLink
                    className="header__index-element"
                    to="/signin"
                    onClick={handleLogout}
                  >
                    Cerrar Sesión
                  </NavLink>
                </li>
              ) : (
                <li>
                  <NavLink className="header__index-element" to="/signup">
                    Registrar
                  </NavLink>
                </li>
              )}
              {isLogedIn ? (
                ""
              ) : (
                <li>
                  <NavLink className="header__index-element" to="/signin">
                    Ingresar
                  </NavLink>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
