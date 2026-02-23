import styles from "./pontosEntrega.module.css"
//Estrutura dos cards
import Card from "../../component/card"
//Estilização deste arquivo
import { FaMapMarkerAlt } from "react-icons/fa";
//Importações da imagens
import PracaDeodoro from "../../assets/localdeodoro.png"
import MercadoCentral from "../../assets/localmercado-central.png"
import SocorraoI from "../../assets/localsocorraoI.png"
import HospitalGeral from "../../assets/localhospital-geral.png"
import SantaCasa from "../../assets/localsanta-casa.png"
export function Entrega() {
    return (
        <div id="Entrega" className={styles.secaoEntrega}>
            <h1>Nossos Pontos De Entrega</h1>
            <div className={styles.Cards}>
                <Card estiloCard={styles} imagemLocal={PracaDeodoro} nome="Praça deodoro" textoCard="Avenida Gomes de Castro, Centro" textoBotao="ver no Mapa" link="https://surl.li/tjoswc" icone={<FaMapMarkerAlt size={20} />}/>
                <Card estiloCard={styles} imagemLocal={MercadoCentral} nome="Mercado Central" textoCard="Av. Guaxenduba, Centro" textoBotao="ver no Mapa" link="https://surl.lt/xmlrcb" icone={<FaMapMarkerAlt size={20} />}/>
                <Card estiloCard={styles} imagemLocal={SocorraoI} nome="Socorrão I" textoCard="Rua do Passeio, S/N, Centro" textoBotao="ver no Mapa" link="https://surl.li/xwwucd" icone={<FaMapMarkerAlt size={20} />}/>
                <Card estiloCard={styles} imagemLocal={HospitalGeral} nome="Hospital Geral" textoCard="R. São Pantaleão, 02 , Centro" textoBotao="ver no Mapa" link="https://surl.li/qmhkro" icone={<FaMapMarkerAlt size={20} />}/>
                <Card estiloCard={styles} imagemLocal={SantaCasa} nome="Santa Casa" textoCard="R. do Norte, 233, Centro" textoBotao="ver no Mapa" link="https://surl.li/brltvu" icone={<FaMapMarkerAlt size={20} />}/>
            </div>
        </div>
    )
}
