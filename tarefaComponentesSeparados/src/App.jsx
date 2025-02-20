import "./App.css";
import ListaTarefas from "./components/ListaTarefas"
import Header from "./components/Header"
import Footer from "./components/FooterProps"



function App() {
  return (
    <>
  <Header/>
         <ListaTarefas/>
         <Footer
        email="grupo5_melhorgrupo@gmail.com"
        telefone="(19)1942-1845"
        instagram="https://www.instagram.com"
        facebook="https://www.facebook.com"
        twitter="https://www.twitter.com"
        autor="Grupo 5"
      />
    </>

  )
}
export default App;
