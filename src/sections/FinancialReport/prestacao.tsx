import styles from './prestacao.module.css'

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
                    <img className={styles.img} src="src/assets/logo.posto.png" alt="" />
                    <img className={styles.img} src="src/assets/logo.posto.png" alt="" />
                    <img className={styles.img} src="src/assets/logo.posto.png" alt="" />
                </div>
            </div>
        </div>
    )
}
