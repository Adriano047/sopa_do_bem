import styles from './prestacao.module.css'
import logoPaloma from '../../assets/logo.posto.png'
export function Prestacao() {
    return (
        <div id="Parcerias" className={styles.container}>

            {/* PRESTAÇÃO DE CONTAS */}
            <div className={styles.prestacao}>
                <h1 className={styles.titulo}>Prestação de Contas</h1>
                <p>Transparência é essencial para nós. Veja como aplicamos as doações recebidas:</p>


                <div className={styles.graficoFake}></div>

                <button>Baixar Relatório</button>
            </div>

            {/* PARCERIAS */}
            <div className={styles.parcerias}>
                <h1 className={styles.titulo}>Parcerias</h1>

                <div className={styles.logoGrid}>
                    <img className={styles.img} src={logoPaloma} alt="" />
                    <img className={styles.img} src={logoPaloma} alt="" />
                    <img className={styles.img} src={logoPaloma} alt="" />
                </div>
            </div>
        </div>
    )
}
