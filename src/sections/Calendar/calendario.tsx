import calendarioSopadoBem from '../../assets/calendarioSopadoBem.jpg'
import styles from './calendario.module.css'

export function Calendario() {
    return (
        <section id="Calendario" className={styles.corpo}>

            <h1 className={styles.titulo}>
                Confira o Calendário deste mês
            </h1>

            <div className={styles.wrapper}>
                <img
                    src={calendarioSopadoBem}
                    alt="Calendário do mês"
                    className={styles.imagem}
                />

            </div>

        </section>
    )
}
