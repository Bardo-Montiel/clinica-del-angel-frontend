import {} from "lucide-react";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__content">
          <div className="footer__info">
            <section className="footer__section">
              <h4 className="footer__subtitle">Clínica del Ángel</h4>
              <p className="footer__paragraph">
                Dedicados a tu salud con los más altos estándares de calidad y
                un trato especializado. Más de 20 años cuidando a las familias
                de nuestra comunidad.
              </p>
            </section>
            <section className="footer__section">
              <h4 className="footer__subtitle">Contacto</h4>
              <ul>
                <address>
                  <li className="footer__paragraph">
                    Av. Matamoros #40 Edo. Mex, CP 56600
                  </li>
                </address>
                <li className="footer__paragraph">+52 (55) 1234-56-78</li>
                <li className="footer__paragraph">
                  dr_mont@clinicadelangel.com.mx
                </li>
              </ul>
            </section>
            <section className="footer__section">
              <h4 className="footer__subtitle">Horarios de atención</h4>
              <ul>
                <li className="footer__paragraph">
                  Lunes a Viernes: 8:00 AM - 8:00 PM
                </li>
                <li className="footer__paragraph">
                  Sábados: 8:00 AM - 4:00 PM
                </li>
                <li className="footer__paragraph">Urgencias: 24 horas</li>
              </ul>
            </section>
          </div>
          <div className="footer__map-content">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.4559609437097!2d-98.90606502576004!3d19.262527946092174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1eb6075c1939%3A0x28f56970222ba0f7!2sClinica%20Del%20Angel!5e0!3m2!1ses!2smx!4v1779122551467!5m2!1ses!2smx"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="footer__map"
              sandbox="allow-scripts allow-same-origin allow-popups"
            ></iframe>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
