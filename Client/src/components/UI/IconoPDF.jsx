import { Tooltip } from "react-tooltip";
import { GrDocumentPdf } from "react-icons/gr";
import { useId } from "react";

export const IconoPDF = ({ className, onClick, message }) => {
  const id = useId();

  return (
    <>
      <Tooltip id={id} />
      <GrDocumentPdf
        className={`cursor-pointer text-2xl hover:text-error outline-none ${className}`}
        onClick={onClick}
        data-tooltip-id={id}
        data-tooltip-content={message}
      />
    </>
  );
};

export default IconoPDF;
