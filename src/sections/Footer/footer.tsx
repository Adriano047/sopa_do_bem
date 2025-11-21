 import style from './footer.module.css'
import logoFace from '../../assets/logoFacebk.png'
import logoInsta from '../../assets/instagram.png'
import logoWpp from '../../assets/whatsapp.png'
import logoSopadoBem from '../../assets/logoSopadoBem.png'

export function Footer() {
  return (
      <footer className={style.rodape}>
        <div className={style.cabecalho}>
            <img src={logoSopadoBem} alt="logoSopadoBem"/>
            <a href="#"><h3>Introdução</h3></a>
            <a href="#Fundadores"><h3>Fundadores</h3></a>
            <a href="#Galeria"><h3>Galeria</h3></a>
            <a href="#Donate"><h3>Doações</h3></a>
            <a href="#Calendario"><h3>Calendario</h3></a>
            <a href="#Entrega"><h3>Pontos de Entrega</h3></a>
        </div>
        <div className={style.linha}></div>
        <div className={style.fim}>
            <div>
                <img className={style.logos} src={logoFace} alt="logo facebook"/>
                <img className={style.logos} src={logoInsta} alt="logo instagram"/>
                <img className={style.logos} src={logoWpp} alt="logo whatsapp"/>
            </div>
            <div>
                <h4>Todos os direitos reservados © 2025 | POLÍTICA DE PRIVACIDADE</h4>
                <a href="#" className={style.voltarTopo}><h4>VOLTAR AO TOPO ↑</h4></a>
            </div>    
        </div>
    </footer>
);
}