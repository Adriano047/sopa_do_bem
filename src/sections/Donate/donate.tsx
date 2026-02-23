import styles from './donate.module.css'
import { IoIosGift } from "react-icons/io";
import { PiChatCircleDotsFill } from "react-icons/pi";
import { VscHeartFilled } from "react-icons/vsc";

export function Donate() {
    return (
        <div id="Donate" className={styles.corpo}>
            <section className={styles.cabecalho}>
                <h1>Ajude-nos</h1>
                <h3>Junte-se à nossa missão. Seja voluntário, doe, defenda, comece hoje.</h3>
            </section>

            <section className={styles.cards}>

                <div className={styles.card}>
                    <VscHeartFilled size={60} className={styles.gifs}/>
                    <h3>Voluntarie-se</h3>
                    <p className={styles.texto}>
                        Junte-se à nossa equipe de voluntários dedicados e ajude a fazer a diferença na sua comunidade.
                    </p>
                    <button className={styles.botao}>Clique aqui</button>
                </div>

                <div className={styles.card}>
                    <IoIosGift size={60} className={styles.gifs}/>

                    <h3>Doações</h3>
                    <p className={styles.texto}>
                        Suas generosas doações nos ajudam a fornecer refeições e apoio aos necessitados.
                    </p>
                    <button className={styles.botao2}>Clique aqui</button>
                </div>

                <div className={styles.card}>
                    <PiChatCircleDotsFill size={60}/>
                    <h3>Divulgue</h3>
                    <p className={styles.texto}>
                        Ajude-nos a alcançar mais pessoas compartilhando nossa missão com sua rede.
                    </p>
                    <button className={styles.botao2}>Clique aqui</button>
                </div>

            </section>
        </div>
    )
}