import styles from "./introducao.module.css"
import sopaImagem1 from "../../assets/comunitaria.jpg"
import sopaImagem2 from "../../assets/Entregando.jpg"
export function Introducao() {
    return (
        <div className={styles.container}>

            <div className={styles.titulo1}>
                <div>
                    <h1>Nossa Origem</h1>
                    <p>A Sopa do Bem surgiu em 2018, idealizada por seis amigos com o desejo de alimentar pessoas em situação de vulnerabilidade.
                        Começamos de forma simples, com um pequeno caldeirão de sopa que servia cerca de 50 pessoas por mês.
                        Hoje, somos mais de 40 membros engajados</p>
                </div>
                <div className={styles.containerImg} >
                    <img className={styles.imagem1} src={sopaImagem1} alt="" />
                </div>
            </div>
            <div className={styles.titulo2}>
                <div className={styles.containerImg} >
                    <img className={styles.imagem2} src={sopaImagem2} alt="" />
                </div>
                <div className={styles.t2}>
                    <h1>Nossa Missão</h1>
                    <p>Promover a cidadania e enfrentar as
                        desigualdades, por meio da distribuição de refeições a pessoas que se
                        encontram em situação de vulnerabilidade social nas ruas, bem como aos
                        acompanhantes de pessoas internadas em hospitais públicos de São Luís.

                    </p></div>
            </div>


        </div>
    )
}