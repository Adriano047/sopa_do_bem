import styles from './prestacao.module.css'
export function Prestacao() {
    return (
        <div id="Parcerias" className={styles.container}>
            <div className={styles.prestacao}>
                <h1 className={styles.titulo}> Prestação de Contas</h1>
                <p>Transparência é essencial para nós. Veja como aplicamos as doações recebidas: </p>
                <button>Baixar Relatório</button>
            </div>
            <div className={styles.parcerias}>
                <h1 className={styles.titulo}>Parcerias</h1>
                <img className={styles.img} src="src/assets/logo.posto.png" alt="" />


            </div>
        </div>
    )
}