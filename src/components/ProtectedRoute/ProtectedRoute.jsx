import { useContext } from "react";
import { CurrentContext } from "../../contexts/CurrentContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { isLogedIn } = useContext(CurrentContext);

  if (!isLogedIn) {
    return <Navigate to="/signin" replace />;
  }

  return children;
}

export default ProtectedRoute;
