import { Tooltip } from "react-tooltip";
import { MdSimCardDownload } from "react-icons/md";
import { useId } from "react";

export const IconoDescarga = ({ className, onClick, message }) => {
  const id = useId();

  return (
    <>
      <Tooltip id={id} />
      <MdSimCardDownload
        className={`cursor-pointer text-3xl hover:text-sky-600 outline-none ${className}`}
        onClick={onClick}
        data-tooltip-id={id}
        data-tooltip-content={message}
      />
    </>
  );
};

export default IconoDescarga;
