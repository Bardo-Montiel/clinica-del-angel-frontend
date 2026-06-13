import { CheckCircle, XCircle } from "lucide-react";
import { useContext } from "react";
import { CurrentContext } from "../../contexts/CurrentContext";

function InfoTool(props) {
  const { onClose } = props;
  const { registerMessage, isAnError } = useContext(CurrentContext);
  return (
    <>
      <div className="infoTool">
        <div className="infoTool__alert">
          {isAnError ? (
            <XCircle className="infoTool__reject" size={130} />
          ) : (
            <CheckCircle className="infoTool__check" size={130} />
          )}
          <p className="infoTool__text">{registerMessage}</p>
          <button className="infoTool__button" type="button" onClick={onClose}>
            Volver
          </button>
        </div>
      </div>
    </>
  );
}

export default InfoTool;
