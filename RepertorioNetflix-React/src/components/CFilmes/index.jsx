import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import styles from './CFilmes.module.css';

const CLivros = () => {
    const [repertorios, setRepertorios] = useState([]);

    useEffect(() => {
        const buscarRepertorio = async () => {
            try {
                const response = await fetch("/repertorio.json");
                const data = await response.json();
                setRepertorios(data.repertorios.slice(0, 33));
            } catch (error) {
                console.error("There was a problem with the fetch operation:", error);
            }
        };
        buscarRepertorio();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div className={styles.carousel}>
            <Slider {...settings}>
                {repertorios.length > 0 ? (
                    repertorios
                        .filter(repo => repo.tipo === "filme")
                        .map((repo) => (
                        <div className={styles.book} key={repo.id}>
                            <a href={`/details/${repo.id}`}><img className={styles.bookImage} src={repo.imagem} alt={repo.titulo} /></a>
                        </div>
                    ))
                ) : (
                    <p>Carregando repositórios...</p>
                )}
            </Slider>
        </div>
    );
};

export default CLivros;
