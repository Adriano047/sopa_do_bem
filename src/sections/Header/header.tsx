import { useState } from "react";
import styles from "./header.module.css";

export function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header>
            <nav className={styles.navbar}>
                <div className={styles.menu}>

                    <img className={styles.logo} src="src/assets/logo.png" alt="Logo" />

                    <ul className={`${styles.nav} ${open ? styles.open : ""}`}>
                        <li><a href="#Fundadores">Fundadores</a></li>
                        <li><a href="#Galeria">Galeria</a></li>
                        <li><a href="#Donate">Doações</a></li>
                        <li><a href="#Calendario">Calendário</a></li>
                        <li><a href="#Entrega">Pontos</a></li>
                        <li><a href="#Parcerias">Parcerias</a></li>
                    </ul>

                    {/* BOTÃO DESKTOP */}
                    <button className={styles.botao}>
                        <a href="#Aniversariantes">Aniversariantes</a>
                    </button>

                    {/* BOTÃO HAMBÚRGUER */}
                    <div className={styles.hamburger} onClick={() => setOpen(!open)}>
                        <span className={open ? styles.x1 : ""}></span>
                        <span className={open ? styles.x2 : ""}></span>
                        <span className={open ? styles.x3 : ""}></span>
                    </div>
                </div>
            </nav>

            <div className={styles.imgfundo}>
                <img className={styles.logoPrincipal} src="src/assets/logo.sopa.png" alt="" />
            </div>
        </header>
    );
}
