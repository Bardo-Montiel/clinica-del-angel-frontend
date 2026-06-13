import { Calendar1Icon } from "lucide-react";
import Card from "../Card/Card";
import PopupForm from "../PopupForm/PopupForm.jsx";
import { useContext, useState } from "react";
import { CurrentContext } from "../../contexts/CurrentContext.js";

function Profile() {
  const [popupForm, setPopupForm] = useState(null);
  const { userName, cards, setAppointmentValid, appointmentValid } =
    useContext(CurrentContext);

  function openPopupForm() {
    setPopupForm(true);
  }
  function closePopupForm() {
    setPopupForm(null);
  }

  return (
    <div className="profile">
      <section className="profile__content">
        <h3 className="profile__name">
          <span>Bienvenido</span> {userName}
        </h3>
        <div className="profile__get-appointment">
          <h4 className="profile__paragraph">Historial de citas</h4>
          <button
            className="profile__appointment-button"
            type="button"
            onClick={openPopupForm}
          >
            Agendar cita
            <Calendar1Icon className="profile__icon-appointment" />
          </button>
        </div>
        <p className="profile__text">
          Horarios: Lun-Vier: 8:00am-7:00pm / Sab-Dom: 9:00am-2:00pm
        </p>
        <div className="profile__appointment">
          {Array.isArray(cards) &&
            cards.map((card) => {
              return <Card data={card} key={card._id} />;
            })}
        </div>
      </section>
      {popupForm && <PopupForm onClosePopup={closePopupForm} />}
    </div>
  );
}

export default Profile;
