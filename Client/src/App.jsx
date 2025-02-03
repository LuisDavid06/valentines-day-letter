import "./App.css";

import { Tooltip } from "react-tooltip";
import { useEffect, useId, useState } from "react";
import Swal from "sweetalert2";

import { Container } from "./components/UI";

function App() {
  const [contador, setContador] = useState();
  const id = useId();

  useEffect(() => {
    setInterval(calcularConteo, 1000);
  }, []);

  const calcularConteo = () => {
    const targetDate = new Date("2025-02-14T00:00:00"); // 14 de febrero de 2025 a las 12 de la medianoche

    const now = new Date();

    const timeDifference = targetDate - now;

    // Cálculos de tiempo
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );

    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    setContador(`${days}d ${hours}hr ${minutes}min ${seconds}sg`);
  };

  const abrirCarta = () => {
    const targetDate = new Date("2025-02-14T00:00:00"); // 14 de febrero de 2025 a las 12 de la medianoche

    const now = new Date();

    if (now < targetDate) {
      Swal.fire({
        text: "¡Aún no puedes abrirla!",
        icon: "error",
        showConfirmButton: false,
        timer: 3000,
      });
    } else {
      window.open("/ValentinesDayLetter.pdf", "_blank");
    }
  };

  return (
    <Container className="justify-center text-center text-black">
      <Tooltip id={id} />

      <span className="text-lg sm:text-xl md:text-2xl mb-1">
        Valentine's Day Letter
      </span>
      <div
        data-tooltip-id={id}
        data-tooltip-content="Click para abrir"
        className="cursor-pointer hover:bg-gray-200 w-[80%] max-w-[250px] sm:w-[60%] md:w-[50%] md:max-w-[500px] h-28 sm:h-36 md:h-44 bg-white rounded-md flex items-center justify-center border-gray-300 border shadow-lg"
        onClick={abrirCarta}
      >
        <img
          className="w-6 sm:w-8 md:w-9 animate-bounce"
          src="/favicon.svg"
          alt="Heart"
        />
      </div>

      <div className="flex flex-col items-center justify-center mt-2">
        <span>Podrás abrirla dentro de</span>
        <span className="font-bond">{contador}</span>
      </div>
    </Container>
  );
}

export default App;
