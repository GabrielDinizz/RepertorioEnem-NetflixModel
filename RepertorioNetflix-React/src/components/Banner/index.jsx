import styles from '../Banner/Banner.module.css';

function Banner() {
    return (
        <>
            <section className={styles.background}>
                <div className={styles.container}>
                    <div className={styles.Infos}>
                        <h1>Memórias Póstumas <br /> de Brás Cubas</h1>
                        <p>Joaquim Maria Machado de Assis foi um escritor brasileiro, <br />
                            amplamente reconhecido por críticos, estudiosos, escritores e <br />
                            leitores como o maior expoente da literatura brasileira. </p>
                        <button>Vizualizar Obra</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner