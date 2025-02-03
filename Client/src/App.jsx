import "./App.css";

import { Tooltip } from "react-tooltip";
import { useEffect, useId, useState } from "react";

import { Container } from "./components/UI";

function App() {
  const [contador, setContador] = useState();

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

    setContador(`${days}d ${hours}hr ${minutes}min ${seconds} g`);
  };

  useEffect(() => {
    setInterval(calcularConteo, 1000);
  }, []);

  const id = useId();

  return (
    <Container className="justify-center">
      <Tooltip id={id} />

      <div
        data-tooltip-id={id}
        data-tooltip-content="Click para abrir"
        className="cursor-pointer hover:bg-gray-200 w-[80%] sm:w-[60%] md:w-[50%] max-w-[500px] h-28 sm:h-36 md:h-44 bg-white rounded-md flex items-center justify-center border-gray-300 border shadow-lg"
      >
        <img className="w-6 sm:w-8 animate-bounce" src="/favicon.svg" alt="" />
      </div>

      <div className="flex flex-col items-center justify-center text-center mt-2">
        <span className="text-black">Podrás abrirla dentro de</span>
        <span className="text-black">{contador}</span>
      </div>
    </Container>
  );
}

export default App;
