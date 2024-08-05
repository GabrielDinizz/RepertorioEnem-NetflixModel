import styles from '../Header/Header.module.css';
import repertorioLogo from '../../assets/repertorioLogo.png';

function Header() {
    return (
       <>
            <header>
                <div className={styles.container}>
                    <div>
                        <img src={repertorioLogo} alt="" />
                    </div>
                    <div className={styles.menu}>
                        <a href="/"><p>Home</p></a>
                        <a href="/pesquisa"><p>Pesquisar</p></a>
                    </div>
                </div>
            </header>
        </> 
    )
}

export default Header