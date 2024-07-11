import React from 'react';
import styles from './Footer.module.css'; // Importação do CSS Module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSection}>
        <h3>Sobre o Site</h3>
        <p>Site desenvolvido por estudantes Gabriel Diniz e Felipe Costa com o objetivo de auxiliar aqueles que buscam repertório cultural para o Enem. Desenvolvido em React com consumo de nossa própria API! Gostaria de sugerir um filme? Entre em contato conosco!</p>
        <button className={styles.languageButton}>Português</button>
      </div>
      <div className={styles.footerSection}>
        <h3>Seções</h3>
        <ul>
          <li>Início</li>
          <li>Filmes</li>
          <li>Músicas</li>
          <li>Livros</li>
          <li>Destaques</li>
        </ul>
      </div>
      <div className={styles.footerSection}>
        <h3>Contatos</h3>
        <p>gabrieldinizcarreiro@gmail.com</p>
        <p>felipecostalisboa@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
