import styles from '../Banner/Banner.module.css';

function Banner() {
    return (
        <>
            <section className={styles.background}>
                <div className={styles.container}>
                    <div className={styles.Infos}>
                        <h1>Memórias Póstumas <br /> de Brás Cubas</h1>
                        <p>Memórias Póstumas de Brás Cubas é um romance escrito por Machado de Assis,
                            desenvolvido em princípio como folhetim, de março a dezembro de 1880, na
                            Revista Brasileira, para, no ano seguinte, ser publicado como livro, pela
                            então Tipografia Nacional como Memorias Posthumas de Braz Cubas.</p>
                        <a href="/pesquisa"><button>Vizualizar Obra</button></a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner