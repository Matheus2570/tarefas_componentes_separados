import "./tarefas.css"
import { useState } from "react";

function Tarefas(props) {
  const [Concluido, setConcluindo] = useState(false);

  const Concluir = () => {
    setConcluindo(true);
  };

  return (
    <>
    <div className="blocoTarefas">
        <p
          className={`tarefaRealizada ${Concluido ? "risco" : ""}`}
        >
    {props.tarefaRealizada}
        </p>
        <button
          onClick={Concluir}
          className={Concluido ? "Concluida" : "botaoConcluir"}
          disabled={Concluido}
        >
          {Concluido ? "Concluida ✅" : "Concluir ➖"}
        </button>
      </div>
    </>
  );
}

export default Tarefas;

// Teste