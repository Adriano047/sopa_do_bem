import styles from "./introducao.module.css"
import sopaImagem from "../../assets/sopa-home.png"
export function Introducao() {
    return (
        <div className={styles.container}>

            <div className={styles.titulo1}>
                <div>
                    <h1>Nossa Origem</h1>
                    <p>A Sopa do Bem surgiu em 2018, idealizada por seis amigos com <br />o desejo de alimentar pessoas em situação de vulnerabilidade.
                        <br />Começamos de forma simples, com um pequeno caldeirão de sopa que <br />servia cerca de 50 pessoas por mês.
                        Hoje, somos mais de 40 membros engajados</p>
                </div>
                <img className={styles.imagem1} src={sopaImagem} alt="" />
            </div>
            <div className={styles.titulo2}>
                <img className={styles.imagem2} src={sopaImagem} alt="" />
                <div className={styles.t2}>
                    <h1>Nossa Missão</h1>
                    <p>Promover a cidadania e enfrentar as
                        desigualdades, por meio da <br />distribuição de refeições a pessoas que se
                        encontram em situação de <br />vulnerabilidade social nas ruas, bem como aos
                        acompanhantes de <br />pessoas internadas em hospitais públicos de São Luís.

                    </p></div>
            </div>


        </div>
    )
}