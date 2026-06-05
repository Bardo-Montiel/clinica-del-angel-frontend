import { PencilIcon, BookOpen } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { CurrentContext } from "../../contexts/CurrentContext";
import InfoTool from "../InfoTool/InfoTool";

function Register() {
  const {
    handleRegistration,
    setIsRegister,
    isRegister,
    setRegisterMessage,
    setIsAnError,
  } = useContext(CurrentContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    //targetForm selecciona el formulario donde se inserta esta función
    const targetForm = e.target;
    if (password !== confirmPassword) {
      return alert("Las contraseñas no coinciden.");
    }
    handleRegistration({
      name,
      email,
      password,
      confirmPassword,
    });
    //reestablecemos los campos del formulario
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    targetForm.reset();
  };

  const closeInfoTool = () => {
    setIsRegister(false);
    setRegisterMessage(null);
    setIsAnError(false);
  };

  return (
    <div className="register">
      <section className="register__content">
        <figure className="main__content-icon register__content-icon">
          <BookOpen size={50} />
        </figure>
        <h3 className="register__title">Registrate</h3>
        <p className="register__subtitle">Únete para agendar cita</p>
        <form className="register__form" onSubmit={handleSubmit}>
          <label htmlFor="email" className="register__input-name">
            NOMBRE
          </label>
          <input
            className="form__input register__input"
            type="text"
            id="name"
            name="name"
            placeholder="Escribe tu nombre"
            minLength="2"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor="password" className="register__input-name">
            CORREO ELECTRÓNICO
          </label>
          <input
            className="form__input register__input"
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
          <label htmlFor="password" className="register__input-name">
            CONTRASEÑA
          </label>
          <input
            className="form__input register__input"
            type="password"
            id="password"
            name="password"
            placeholder="contraseña"
            minLength="8"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label htmlFor="confirmPassword" className="register__input-name">
            CONFIRMAR CONTRASEÑA
          </label>
          <input
            className="form__input register__input"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirma tu constraseña"
            minLength="8"
            required
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            pattern={
              password
                ? `^${password.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")}$`
                : undefined
            }
          />
          <button type="submit" className="register__button button-submit">
            Registrarme
            <PencilIcon />
          </button>
        </form>
        <div className="login__register">
          <p>¿Ya tienes cuenta? </p>
          <NavLink to="/signin" className="register__link">
            Ingresa aquí
          </NavLink>
        </div>
      </section>

      {isRegister && <InfoTool onClose={closeInfoTool} />}
    </div>
  );
}

export default Register;
