import React, { useEffect, useState } from 'react';
import styles from '../CLivros/CLivros.module.css';
import Card from '../../components/Card';

function CFilmes() {
    const [repertorios, setRepertorios] = useState([]);

    useEffect(() => {
        const buscarRepertorio = async () => {
            try {
                const response = await fetch("/repertorio.json");
                const data = await response.json();
                setRepertorios(data.repertorios);
                setRepertorios(data.repertorios.slice(0, 5)); 
            } catch (error) {
                console.error("There was a problem with the fetch operation:", error);
            }
        };
        buscarRepertorio();
    }, []);

    return (
        <>
            <h2 className={styles.title}>Filmes</h2>
            {repertorios.length > 0 ? (
                <section className={styles.cards}>
                    {repertorios.map((repo) => (
                        <Card
                            key={repo.id}
                            descricao={repo.descricao}
                            titulo={repo.titulo}
                            imagem={repo.imagem}
                        />
                    ))}
                </section>
            ) : (
                <p>Carregando repositórios...</p>
            )}
        </>
    );
}

export default CFilmes;
