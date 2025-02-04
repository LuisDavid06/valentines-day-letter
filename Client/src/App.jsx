import "./App.css";

import { Tooltip } from "react-tooltip";
import { useEffect, useId, useState } from "react";
import Swal from "sweetalert2";

import { Container } from "./components/UI";

function App() {
  const [contador, setContador] = useState(undefined);
  const tooltipLetter = useId();
  const tooltipGithub = useId();

  useEffect(() => {
    setInterval(calcularConteo, 1000);
  }, []);

  const targetDate = new Date("2025-02-14T00:00:00"); // 14 de febrero de 2025 a las 12 de la medianoche
  const now = new Date();

  const calcularConteo = () => {
    if (now < targetDate) {
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
    } else {
      setContador(null);
    }
  };

  const abrirCarta = () => {
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
    <Container className="text-center text-black select-none">
      <Tooltip id={tooltipLetter} />
      <Tooltip id={tooltipGithub} />

      <div className="w-[80%] max-w-[250px] sm:w-[60%] md:w-[50%] md:max-w-[500px]">
        <span className="text-lg sm:text-xl md:text-2xl mb-1 text-red-600">
          Valentine's Day Letter
        </span>
        <div
          data-tooltip-id={tooltipLetter}
          data-tooltip-content="Click para abrir"
          className="cursor-pointer hover:bg-gray-200 h-28 sm:h-36 md:h-44 bg-white rounded-md flex items-center justify-center border-gray-300 border shadow-lg"
          onClick={abrirCarta}
          data-tooltip-place="right"
        >
          <img
            className="w-6 sm:w-8 md:w-9 animate-bounce"
            src="/favicon.svg"
            alt="Heart"
          />
        </div>

        <div className="flex flex-col items-center justify-center mt-2">
          {contador !== undefined && contador !== null ? (
            <>
              <span>Podrás abrirla dentro de</span>
              <span className="font-bond">{contador}</span>
            </>
          ) : contador !== undefined && contador === null ? (
            <span className="sm:text-lg">¡Ábrela!</span>
          ) : null}
        </div>
      </div>

      <footer className="pb-[15vh] sm:pb-[5vh] text-sm sm:text-base">
        Hecho por{" "}
        <a
          href="https://github.com/LisandrOviedo"
          className="text-red-600 hover:text-red-500"
          target="_blank"
          rel="noopener noreferrer"
          data-tooltip-id={tooltipGithub}
          data-tooltip-content="Click para ver detalles"
        >
          Lisandro Oviedo
        </a>{" "}
        © 2025
      </footer>
    </Container>
  );
}

export default App;
