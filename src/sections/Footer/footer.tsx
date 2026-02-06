import style from './footer.module.css'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { LiaLongArrowAltUpSolid } from "react-icons/lia";
import logoSopadoBem from '../../assets/logo-sopa.svg'

export function Footer() {
    return (
        <footer className={style.rodape}>
            <div className={style.cabecalho}>
                <img src={logoSopadoBem} alt="logoSopadoBem" />
                <div className={style.links}>
                    <div className={style.navegacao}>
                        <h4>Navegacao</h4>
                        <ul>
                            <li><a href="#">Introdução</a></li>
                            <li><a href="#Fundadores">Fundadores</a></li>
                            <li><a href="#Galeria">Galeria</a></li>
                            <li><a href="#Donate">Doações</a></li>
                            <li><a href="#Calendario">Calendario</a></li>
                            <li><a href="#Entrega">Pontos</a></li>
                        </ul>
                    </div>
                    <div className={style.contato}>
                        <h4>Contato</h4>
                        <ul>
                            <li><a href="#"><IoLogoWhatsapp size={20}/>Whatsapp</a></li>
                            <li><a href="#"><FaMapMarkerAlt size={20}/>Endereço</a></li>
                        </ul>
                    </div>
                    <div className={style.rede}>
                        <h4>Redes e Plataformas</h4>
                        <ul>
                            <li><a href="#"><FaInstagramSquare size={20}/>Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={style.fim}>
                    <p>Todos os direitos reservados © 2025 | POLÍTICA DE PRIVACIDADE</p>
                    <a href="#"><p>Voltar Ao Topo <LiaLongArrowAltUpSolid size={25} /></p></a>
            </div>
        </footer>
    );
}