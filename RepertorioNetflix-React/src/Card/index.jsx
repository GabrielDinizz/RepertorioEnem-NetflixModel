import React from 'react';
import './Card.module.css';

const App = () => {
    const [showCard, setShowCard] = useState(false);
  
    const handleImageClick = () => {
      setShowCard(true);
    };
  
    return (
      <div className="App">
        {showCard ? (
          <div className={styles.card}>
            <h1>A Revolução dos Bichos</h1>
            <p>
              Verdadeiro clássico moderno, concebido por um dos mais influentes escritores do século XX, 
              A revolução dos bichos é uma fábula sobre o poder. Narra a insurreição dos animais de uma 
              granja contra seus donos. Progressivamente, porém, a revolução degenera numa tirania ainda 
              mais opressiva que a dos humanos.
            </p>
            <img src="/path/to/your/image.jpg" alt="A Revolução dos Bichos" className={styles.cardImage} />
          </div>
        ) : (
          <img
            src="/path/to/your/image.jpg"
            alt="A Revolução dos Bichos"
            className={styles.image}
            onClick={handleImageClick}
          />
        )}
      </div>
    );
  };
  
  export default App;