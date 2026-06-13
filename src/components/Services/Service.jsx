import { useState } from "react";
import { CurrentContext } from "../../contexts/CurrentContext.js";
import { ArrowBigRight } from "lucide-react";

function Service(props) {
  const { data, icon, image } = props;
  const IconoService = icon;

  const [popupService, setPopupService] = useState(null);

  function closePopupService() {
    setPopupService(null);
  }

  function openPopupService() {
    setPopupService(true);
  }

  return (
    <>
      <article className={`service ${data.class}`} onClick={openPopupService}>
        <figure className="service__corner" />
        <div className="service__content-icon">
          <IconoService className="service__icon" size={40} />
        </div>
        <h4 className="service__title">{data.title}</h4>
        <p className="service__intro">{data.intro}</p>
        <p className="service__link" href="#">
          ver detalles <ArrowBigRight className="service__link-icon" />
        </p>
      </article>
      {popupService && (
        <section className="service__popup popup" onClick={closePopupService}>
          <div
            className="service__popup-container"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="service__popup-article popup__image-content">
              <div
                className="service__popup-image"
                style={{
                  backgroundImage: `radial-gradient(600px 600px, transparent, #000), url(${image})`,
                }}
              />
            </div>
            <article className="service__popup-article">
              <h5 className="service__popup-title">{data.title}</h5>
              <p className="service__popup-description">{data.description}</p>
              <button
                className="service__popup-botton"
                type="button"
                onClick={closePopupService}
              >
                Regresar
              </button>
            </article>
          </div>
        </section>
      )}
    </>
  );
}

export default Service;
