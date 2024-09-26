import styles from './Card.module.css'

function Card({titulo, descricao, imagem}) {
    return (
        <div className={styles.card}>
            <div className={styles['card-inner']}>
                <div className={styles['card-front']}>
                    <img src={imagem} alt="" className={styles.imgFront} />
                    <p>{titulo}</p>
                </div>
                <div className={styles['card-back']}>
                    <p>{descricao}</p>
                </div>
            </div>
        </div>
    )
}

export default Card