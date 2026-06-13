import {
  CalendarDaysIcon,
  Check,
  BoneIcon,
  HeartPulse,
  BabyIcon,
  Scissors,
  Stethoscope,
  Accessibility,
} from "lucide-react";
import servicesData from "../../data/services.json";
import infoData from "../../data/info.json";
import room from "../../../images/room.jpg";
import traumaImage from "../../../images/traumatologia.jpeg";
import heridasImage from "../../../images/heridas.jpeg";
import fisioterapiaImage from "../../../images/fisioterapia.jpeg";
import cirugiaImage from "../../../images/cirugia-general.jpeg";
import pediatriaImage from "../../../images/pediatria.jpeg";
import otorrinoImage from "../../../images/otorrinolaringologia.jpeg";
import { NavLink } from "react-router-dom";
import Service from "../Services/Service.jsx";

function Main() {
  const iconsServices = {
    BoneIcon,
    HeartPulse,
    BabyIcon,
    Scissors,
    Stethoscope,
    Accessibility,
  };

  const imageServices = {
    traumaImage,
    heridasImage,
    fisioterapiaImage,
    cirugiaImage,
    pediatriaImage,
    otorrinoImage,
  };

  return (
    <>
      <main className="main">
        <section className="main__lobby-section">
          <div className="main__section-content">
            <h2 className="main__slogan">
              Tu salud en manos de <span>Ángeles</span>
            </h2>
            <p className="main__vision">
              Dedicados a la excelencia clínica mediante la integración de
              especialistas de alto nivel. Asumimos un compromiso con la
              preservación de la vida y el restablecimiento de la salud integral
              de nuestros pacientes.
            </p>
            <NavLink to="/appointment" style={{ textDecoration: "none" }}>
              <button className="main__button-cite">
                Agendar Cita
                <CalendarDaysIcon />
              </button>
            </NavLink>
          </div>
        </section>
        <section className="main__services">
          <p className="main__commentary">CUIDADO ESPECIALIZADO</p>
          <h3 className="main__subtitle">Servicios que transforman vidas</h3>
          <p className="main__paragraph">
            Contamos con las especialidades médicas más demandadas, dirigidas
            por líderes en su campo.
          </p>
          <div className="main__index-service">
            {servicesData.map((service) => {
              const icon = iconsServices[service.icon];
              const image = imageServices[service.image];
              return (
                <Service
                  key={service.id}
                  data={service}
                  icon={icon}
                  image={image}
                />
              );
            })}
          </div>
        </section>
        <section className="main__disposition">
          <div className="main__disposition-container">
            <img
              src={room}
              alt="room-image"
              className="main__dispoition-image"
            />
            <aside className="main__disposition-information">
              <p className="main__disposition-comentary">Excelencia médica</p>
              <h3 className="main__disposition-subtitle">
                Equipo de calidad, seguro e higienico
              </h3>
              <p className="main__disposition-paragraph">
                Salvaguardamos la seguridad de nuestros pacientes a través de un
                equipo médico esterilizado, áreas de estar limpias y seguras, y
                combinamos la precisión quirúrgica con el trato digno que cada
                paciente merece.
              </p>
              {infoData.map((area) => {
                return (
                  <div className="main__check-list" key={area.id}>
                    <figure className="main__content-icon main__content-check-icon">
                      <Check size={40} />
                    </figure>
                    <div className="main__list-package">
                      <h4 className="main__list-title">{area.title}</h4>
                      <p className="main__list-paragraph">{area.description}</p>
                    </div>
                  </div>
                );
              })}
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}

export default Main;
