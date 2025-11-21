import styles from './header.module.css'

export function Header() {
    return (
        <header>
            <nav className={styles.navbar}>
                <div className={styles.menu}>
                    <img className={styles.logo} src="src/assets/logo.png" alt="" />

                    <ul className={styles['nav-links']} >
                        <li> <a href="#Fundadores">Fundadores</a></li>
                        <li> <a href="#Galeria">Galeria</a></li>
                        <li> <a href="#Donate">Doações</a></li>
                        <li> <a href="#Calendario">Calendario</a></li>                       
                        <li> <a href="#Entrega">Pontos de Entregas</a></li>
                        <li> <a href="#Parcerias">Parcerias</a></li>                        
                    </ul>
                    <button className={styles.botao}> <a href="Aniversariantes">Aniversariantes</a></button>
                </div>
                
            </nav>
            <div className={styles.imgfundo}>
                <img className={styles.logoPrincipal} src="src/assets/logo.sopa.png" alt="" />
            </div>

        </header>
    )
}