import { useState } from "react";

function Card(props) {
  const { data } = props;
  const handleDownLoadPDF = () => {
    const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000"; //URL del del pueto del backend
    const token = localStorage.getItem("token");
    //este método hace la solicitud a la API automáticamente con la url, en este caso para generar un PDF para cada cita
    window.open(
      `${BASE_URL}/appointment/appointments/${data._id}/pdf?token=${token}`,
      "_blank",
    );
  };

  return (
    <>
      <div className="profile__card" onClick={handleDownLoadPDF}>
        <p>
          <b>Paciente:</b> {data.patientName}
        </p>
        <p>
          <b>Holario de cita:</b> {data.date}
        </p>
        <p>
          <b>Area:</b> {data.area}
        </p>
        <p>
          <b>Tipo de cita:</b> {data.typeOfAppointment}
        </p>
        <p>
          <b>Num. telefónico:</b> {data.phoneNumber}
        </p>
        <p>
          <b>Edad del paciente:</b> {data.age}
        </p>
      </div>
    </>
  );
}

export default Card;
