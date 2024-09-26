import styles from '../Header/Header.module.css';
import repertorioLogo from '../../assets/repertorioLogo.png';

function Header() {
    return (
        <>
            <header>
                <div className={styles.container}>
                    <div className={styles.pagesMenu}>
                        <div>
                            <img src={repertorioLogo} alt="" />
                        </div>
                        <div className={styles.menu}>
                            <a href="/"><p>Home</p></a>
                            <a href="/pesquisa"><p>Pesquisar</p></a>
                        </div>
                    </div>
                    <div className={styles.authMenu}>
                        <div className={styles.login}>
                            <a href="/login">Login</a>
                        </div>
                        <div className={styles.register}>
                            <a href="/register">Cadastrar-se</a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header