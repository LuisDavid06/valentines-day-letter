import "./App.css";

import { Container, Button } from "./components/UI";

function App() {
  return (
    <Container className="justify-center">
      <div className="w-[30%] h-48 bg-white rounded-md flex items-center justify-center border-gray-300 border shadow-lg">
        <img className="w-8" src="/favicon.svg" alt="" />
      </div>
    </Container>
  );
}

export default App;
