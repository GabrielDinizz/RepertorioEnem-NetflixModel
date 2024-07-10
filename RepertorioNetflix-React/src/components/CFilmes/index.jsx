import styles from '../CFilmes/CFilmes.module.css';

function CFilmes() {
    return (
        <>
        <section className={styles.cards}>
            <div className={styles.card}>
                <div className={styles['card-inner']}>
                    <div className={styles['card-front']}>
                        <p>Front Side 1</p>
                    </div>
                    <div className={styles['card-back']}>
                        <p>Back Side 1</p>
                    </div>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles['card-inner']}>
                    <div className={styles['card-front']}>
                        <p>Front Side 2</p>
                    </div>
                    <div className={styles['card-back']}>
                        <p>Back Side 2</p>
                    </div>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles['card-inner']}>
                    <div className={styles['card-front']}>
                        <p>Front Side 3</p>
                    </div>
                    <div className={styles['card-back']}>
                        <p>Back Side 3</p>
                    </div>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles['card-inner']}>
                    <div className={styles['card-front']}>
                        <p>Front Side 4</p>
                    </div>
                    <div className={styles['card-back']}>
                        <p>Back Side 4</p>
                    </div>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles['card-inner']}>
                    <div className={styles['card-front']}>
                        <p>Front Side 5</p>
                    </div>
                    <div className={styles['card-back']}>
                        <p>Back Side 5</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default CFilmes