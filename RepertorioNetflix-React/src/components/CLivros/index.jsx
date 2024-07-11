import styles from './CLivros.module.css'; 
import React from 'react';
import Slider from 'react-slick';
const CLivros = () => {
        const books = [
          {
            
            image: 'https://d2p73dvwcg8th4.cloudfront.net/Custom/Content/Products/74/92/74924_calice-17662_z1_637943597346096027.jpg'
          },
          {
            
            image: 'https://d2p73dvwcg8th4.cloudfront.net/Custom/Content/Products/74/92/74924_calice-17662_z1_637943597346096027.jpg'
          },
          {
            
            image: 'https://d2p73dvwcg8th4.cloudfront.net/Custom/Content/Products/74/92/74924_calice-17662_z1_637943597346096027.jpg'
          },
          {
            
            image: 'https://d2p73dvwcg8th4.cloudfront.net/Custom/Content/Products/74/92/74924_calice-17662_z1_637943597346096027.jpg'
          },
          {
            
            image: 'https://d2p73dvwcg8th4.cloudfront.net/Custom/Content/Products/74/92/74924_calice-17662_z1_637943597346096027.jpg'
          }
        ];
      
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
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
              {books.map((book, index) => (
                <div className={styles.book} key={index}>
                  <img className={styles.bookImage} src={book.image} alt={book.title} />
                </div>
              ))}
            </Slider>
          </div>
  );
};

export default   CLivros;
  
