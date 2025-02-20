import Tarefas from "./Tarefas";
import "./listaTarefas.css";

function ListaDeTarefas() {
  return (
    <>
    <div className="blocoMaior">
    <div className="bloco">
        <Tarefas tarefaRealizada="- Arrumar o quarto." />
        <Tarefas tarefaRealizada="- Fazer a pesquisa de Geografia." />
        <Tarefas tarefaRealizada="- Fazer o poema de Português." />
        <Tarefas tarefaRealizada="- Organizar o Diário de bordo de Matemática." />
        <Tarefas tarefaRealizada="- Tirar o lixo." />
        <Tarefas tarefaRealizada="- Passear com o Tobby Johnson Silva Oliveira de vovó, as 14:30." />
        <Tarefas tarefaRealizada="- Ir na academia." />
        <Tarefas tarefaRealizada="- Terminar Game of Thrones." />
        <Tarefas tarefaRealizada="- Fazer almoço(Strogonoff)." />
        <Tarefas tarefaRealizada="- Praticar inglês." />
      </div>
    </div>
    </>
  );
}

export default ListaDeTarefas;
