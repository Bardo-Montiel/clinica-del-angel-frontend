import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//Este componente permite que al viajar entre rutas nos lleve a la parte superior de la página
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
