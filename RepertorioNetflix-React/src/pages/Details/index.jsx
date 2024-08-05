import styles from '../Details/Details.module.css';
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { FaStar } from 'react-icons/fa';

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function Details() {

    const { id } = useParams(); // Obtém o ID da URL
    const [repertorio, setRepertorio] = useState({}); // Estado inicial como objeto vazio (Não pode ser array pois se trata de um único objeto)

    useEffect(() => {
        const buscarRepertorio = async () => {
            try {
                const response = await fetch("/repertorio.json");
                const data = await response.json();
                const repertorioEncontrado = data.repertorios.find(repo => repo.id === parseInt(id, 10));
                setRepertorio(repertorioEncontrado || {}); // Atualiza o estado com o repertório encontrado
            } catch (error) {
                console.error("There was a problem with the fetch operation:", error);
            }
        };
        buscarRepertorio();
    }, [id]);
    // Dependência adicionada para garantir que a busca seja feita sempre que o ID mudar


    // Função para renderizar estrelas com base na relevância
    const renderStars = (count) => {
        const stars = [];
        for (let i = 0; i < count; i++) {
            stars.push(<FaStar key={i} size={20} color="gold" />);
        }
        return stars;
    };


    return (
        <>
            <Header />
            <section className={styles.details}>
                <div className={styles.grid}>
                    <div className={styles.info}>
                        <div className={styles.text}>
                            <h1>{repertorio.titulo || "Título não encontrado"}</h1>
                            <p>{repertorio.descricao || "Descrição não encontrado"}</p>
                        </div>
                        <div className={styles.classificacao}>
                            <div>
                                Relevancia: &nbsp;
                                {renderStars(repertorio.relevancia || 0)}
                            </div>
                            <div>
                                Utilização no Enem: &nbsp;
                                {renderStars(repertorio.mais_usado_no_enem || 0)}
                            </div>
                        </div>
                    </div>
                    <div className={styles.imgDetail}>
                        <div><img src={repertorio.imagem} alt="" /></div>
                    </div>
                </div>
            </section>
            <Footer />
        </>

    );
}

export default Details;