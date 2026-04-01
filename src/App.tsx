//Aqui fica todos os componentes que aparecem na tela

import Home from "./pages/home/Home"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"

function App() {
 
  return (
    <>
    <Navbar/>  
    <Home/>
    <Footer/>
    </>
  
  )
}


export default App // Deixa a função pública com as config padrões 
