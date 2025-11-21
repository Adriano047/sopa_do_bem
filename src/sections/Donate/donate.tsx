import styles from './donate.module.css'
import Gift from '../../assets/Gift.svg'
import Chat from '../../assets/Chat.svg'
import Volunteering from '../../assets/Volunteering.svg'

export function Donate() {
    return (
        <div id="Donate" className={styles.corpo}>
            <section className={styles.cabecalho}>
                <h1>Ajude-nos</h1>
                <h3>Junte-se à nossa missão. Seja voluntário, doe, defenda, comece hoje.</h3>
            </section>

            <section className={styles.cards}>

                <div className={styles.card}>
                    <img src={Volunteering} alt="Voluntarie-se" />
                    <h3>Voluntarie-se</h3>
                    <p className={styles.texto}>
                        Junte-se à nossa equipe de voluntários dedicados e ajude a fazer a diferença na sua comunidade.
                    </p>
                    <button className={styles.botao}>Clique aqui</button>
                </div>

                <div className={styles.card}>
                    <img src={Gift} alt="Doações" />
                    <h3>Doações</h3>
                    <p className={styles.texto}>
                        Suas generosas doações nos ajudam a fornecer refeições e apoio aos necessitados.
                    </p>
                    <button className={styles.botao2}>Clique aqui</button>
                </div>

                <div className={styles.card}>
                    <img src={Chat} alt="Divulgue" />
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