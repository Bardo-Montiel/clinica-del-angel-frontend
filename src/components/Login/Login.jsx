import { HospitalIcon, LogIn } from "lucide-react";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { CurrentContext } from "../../contexts/CurrentContext";

function Login() {
  const { handleLogin, loginError, loginMessage } = useContext(CurrentContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleLogin({
      email,
      password,
    });
  };

  return (
    <div className="login">
      <section className="login__content">
        <figure className="main__content-icon login__content-icon">
          <HospitalIcon size={50} />
        </figure>
        <h3 className="login__title">Bienvenido</h3>
        <p className="login__subtitle">inicia sesión</p>
        <form className="login__form" onSubmit={handleSubmit}>
          <label htmlFor="email" className="login__input-name">
            CORREO ELECTRÓNICO
          </label>
          <input
            className="form__input login__input"
            type="email"
            id="email"
            name="email"
            placeholder="ejemplo@correo.com"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="password" className="login__input-name">
            CONTRASEÑA
          </label>
          <input
            className="form__input login__input"
            type="password"
            id="password"
            name="password"
            placeholder="contraseña"
            minLength="8"
            maxLength="15"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit" className="login__button button-submit">
            Inicia sesión
            <LogIn className="login__button-icon" />
          </button>
        </form>
        <div className="login__register">
          <p>¿Aún no tienes cuenta? </p>
          <NavLink to="/signup" className="login__link">
            Registrate aquí
          </NavLink>
        </div>
      </section>
      {loginError && <p className="login__alert">{loginMessage}</p>}
    </div>
  );
}

export default Login;
