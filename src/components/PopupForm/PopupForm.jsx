import { useContext, useState } from "react";
import { CurrentContext } from "../../contexts/CurrentContext";

function PopupForm(props) {
  const { onClosePopup } = props;
  const { handleAddCard } = useContext(CurrentContext);

  //constante que da como resultado el día actual, bloqueando automáticamente los días pasados del calendario al usar la propiedad "min "en el campo.
  const todayFormat = new Date().toISOString().slice(0, 16);
  const [patientName, setPatientName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState("");
  const [typeOfAppointment, setTypeOfAppointment] = useState("");
  const [age, setAge] = useState("");
  const [area, setArea] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddCard({
      patientName,
      phoneNumber,
      date,
      typeOfAppointment,
      age,
      area,
    });
    onClosePopup();
  };

  return (
    <>
      <section className="popup-form" onClick={onClosePopup}>
        <div
          className="popup-form__content"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <h3 className="popup-form__title">Agenda cita</h3>
          <form className="popup-form__form" onSubmit={handleSubmit}>
            <label htmlFor="patientName">Nombre completo del paciente.</label>
            <input
              type="text"
              className="popup-form__input"
              id="patientName"
              name="patientName"
              minLength="2"
              required
              placeholder="Escribe tu nombre"
              value={patientName}
              onChange={(e) => {
                setPatientName(e.target.value);
              }}
            />
            <label htmlFor="phoneNumber">Teléfono del paciente.</label>
            <input
              type="tel"
              className="popup-form__input"
              id="phoneNumber"
              name="phoneNumber"
              required
              placeholder="Número telefónico"
              minLength="10"
              maxLength="10"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
            <label htmlFor="date">Fecha de cita.</label>
            <input
              type="datetime-local"
              className="popup-form__input"
              id="date"
              name="date"
              min={todayFormat}
              required
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
            <label htmlFor="typeOfAppointment">
              ¿Es primera vez o sub-secuente?.
            </label>
            <select
              name="typeOfAppointment"
              id="typeOfAppointment"
              className="popup-form__input"
              required
              value={typeOfAppointment}
              onChange={(e) => {
                setTypeOfAppointment(e.target.value);
              }}
            >
              <option value="">Selecciona una opción</option>
              <option value="primera vez">Primera vez</option>
              <option value="subsecuente">Sub Secuente</option>
            </select>
            <label htmlFor="age">Edad del paciente.</label>
            <input
              type="number"
              className="popup-form__input"
              name="age"
              id="age"
              min="1"
              max="100"
              required
              placeholder="Edad"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
            <label htmlFor="area">Área de consulta.</label>
            <select
              name="area"
              id="area"
              className="popup-form__input"
              required
              value={area}
              onChange={(e) => {
                setArea(e.target.value);
              }}
            >
              <option value="">Selecciona una opción</option>
              <option value="Traumatología y Orpedia">
                Traumatología y Ortopedia
              </option>
              <option value="Clínica de heridas">Clínica de heridas</option>
              <option value="Fisioterapia">Fisioterapia</option>
              <option value="Cirugía">Cirugía</option>
              <option value="Pediatría">Pediatría</option>
              <option value="Otorrinolaringología">Otorrinolaringología</option>
            </select>

            <button className="popup-form__button" type="submit">
              Agendar
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default PopupForm;
