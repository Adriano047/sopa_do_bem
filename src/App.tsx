import './App.css'
import { Header } from './sections/Header/header.tsx'
import { Introducao } from './sections/Introduction/introducao.tsx'
import { Fundadores } from './sections/Founders/fundadores.tsx'
import { Galeria } from "./sections/Gallery/galeria.tsx"
import { Donate } from './sections/Donate/donate.tsx'
import { Calendario } from './sections/Calendar/calendario.tsx'
import { Entrega } from './sections/DeliveryPoints/pontosEntrega.tsx'
import { Prestacao } from "./sections/FinancialReport/prestacao.tsx"
import { Footer } from './sections/Footer/footer.tsx'

function App() {

  return (
    <>
      <div className='containerPrincipal'>
        <Header />
        <Introducao />
        <Fundadores />
        <Galeria />
        <Donate />
        <Calendario />
        <Entrega />
        <Prestacao />
        <Footer />
      </div>
    </>
  )
}

export default App
