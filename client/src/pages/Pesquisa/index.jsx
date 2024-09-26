import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../Pesquisa/Pesquisa.module.css';

import React, { useState, useEffect } from 'react';

function Pesquisa() {
    const [busca, setBusca] = useState([]);
    const [textoBusca, setTextoBusca] = useState('');

    useEffect(() => {
        const buscarConteudo = async () => {
            if (textoBusca.trim() === '') {
                setBusca([]);
                return;
            }

            try {
                const response = await fetch("/repertorio.json");
                const data = await response.json();
                const buscaEncontrada = data.repertorios.filter(repo =>
                    repo.titulo.toLowerCase().includes(textoBusca.toLowerCase())
                );
                setBusca(buscaEncontrada);
            } catch (error) {
                console.error("There was a problem with the fetch operation:", error);
            }
        };

        buscarConteudo();
    }, [textoBusca]);

    // Atualiza o estado do textoBusca
    const preencherInput = (texto) => {
        setTextoBusca(texto);
    };

    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.pesquisa}>
                        <div className={styles.input}>
                            <input
                                type="text"
                                id='pesquisaInput'
                                value={textoBusca}
                                onChange={(e) => setTextoBusca(e.target.value)}
                                placeholder="Digite o título"
                            />
                        </div>
                        <div className={styles.autocompletar}>
                            <h3>Resultados</h3>
                            {busca.slice(0, 5).map((item, index) => (
                                <p onClick={() => preencherInput(item.titulo)} className={styles.completarP}>
                                    {item.titulo}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className={styles.resultado}>
                        {busca.map((item) => (
                            <div className={styles.book}>
                                <a href={`/details/${item.id}`}><img className={styles.bookImage} src={item.imagem} alt={item.titulo} /></a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Pesquisa;
