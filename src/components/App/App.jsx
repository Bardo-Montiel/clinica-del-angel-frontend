import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes, useFetcher, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { CurrentContext } from "../../contexts/CurrentContext";
import {
  register,
  authorize,
  saveToken,
  getToken,
  removeToken,
} from "../../utils/auth.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";
import { api } from "../../utils/api.js";

function App() {
  const [currentUser, sertCurrentUser] = useState({});
  const [isLogedIn, setisLogedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [cards, setCards] = useState([]);
  const [appointmentValid, setAppointmentValid] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [registerMessage, setRegisterMessage] = useState(null);
  const [isAnError, setIsAnError] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [loginMessage, setLoginMessage] = useState(null);
  const navigate = useNavigate();

  //comprobación de si existe un token al cargar la página
  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }
    api.setTokenHeader(token);
    api
      .getUserInfo()
      .then((userInfo) => {
        sertCurrentUser(userInfo.data[0]);
        setisLogedIn(true);
        setUserName(userInfo.data[0].name);
        navigate("/");
      })
      .catch((err) => {
        removeToken();
        console.error(err);
      });
  }, []);

  //comprobación de información al logearte
  useEffect(() => {
    const token = getToken();
    if (isLogedIn && token) {
      api
        .getUserCards()
        .then((cardsData) => {
          setCards(cardsData.data.reverse());
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [isLogedIn]);

  //controlador de registro
  async function handleRegistration(data) {
    try {
      const res = await register(data);
      setRegisterMessage(res.message);
      setIsRegister(true);
    } catch (error) {
      setRegisterMessage(error.message);
      setIsAnError(true);
      setIsRegister(true);
      console.error(error);
    }
  }

  //controlador de inicio de sesión (login)
  async function handleLogin(data) {
    try {
      const resUser = await authorize(data);
      saveToken(resUser.token);
      api.setTokenHeader(resUser.token);
      setisLogedIn(true);
      navigate("/appointment");
      setUserName(resUser.data.name);
      setLoginError(false);
      setLoginMessage(null);
    } catch (error) {
      console.error(error);
      setLoginMessage(error.message);
      setLoginError(true);
    }
  }

  //controlado de cierre de sesión (logout)
  async function handleLogout(params) {
    try {
      removeToken();
      api.setTokenHeader(null);
      setisLogedIn(false);
      setUserName("");
      sertCurrentUser({});
      setCards([]);
    } catch (err) {
      console.error(err);
    }
  }

  //controlador para generar citas
  async function handleAddCard(data) {
    try {
      const res = await api.postCard(data);
      setCards([res.data, ...cards]);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <CurrentContext.Provider
      value={{
        handleRegistration,
        handleLogin,
        handleLogout,
        handleAddCard,
        setAppointmentValid,
        setIsRegister,
        setRegisterMessage,
        setIsAnError,
        isLogedIn,
        userName,
        cards,
        appointmentValid,
        isRegister,
        registerMessage,
        loginError,
        isAnError,
        loginMessage,
      }}
    >
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <div className="app__content">
              <Header />
              <Main />
              <Footer />
            </div>
          }
        />
        <Route
          path="/signin"
          element={
            <div className="app__content">
              <Header />
              <Login />
              <Footer />
            </div>
          }
        />
        <Route
          path="/signup"
          element={
            <div className="app__content">
              <Header />
              <Register />
              <Footer />
            </div>
          }
        />
        <Route
          path="/appointment"
          element={
            <ProtectedRoute>
              <div className="app__content">
                <Header />
                <Profile />
                <Footer />
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </CurrentContext.Provider>
  );
}

export default App;
