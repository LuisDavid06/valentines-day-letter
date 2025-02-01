import { Tooltip } from "react-tooltip";
import { GrDocumentImage } from "react-icons/gr";
import { useId } from "react";

export const IconoDocumento = ({ className, onClick, message }) => {
  const id = useId();

  return (
    <>
      <Tooltip id={id} />
      <GrDocumentImage
        className={`cursor-pointer text-2xl hover:text-sky-600 outline-non ${className}`}
        onClick={onClick}
        data-tooltip-id={id}
        data-tooltip-content={message || "Ver Documento"}
      />
    </>
  );
};

export default IconoDocumento;
