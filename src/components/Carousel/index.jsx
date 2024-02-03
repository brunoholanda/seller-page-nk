import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const CarrosselDeImagens = ({ imagens }) => {
  return (
    <Carousel
      showArrows={true}
      autoPlay={false}
      infiniteLoop={true}
      showThumbs={false}
    >
      {imagens.map((imagem, index) => (
        <div key={index}>
          <img src={imagem} alt={`Imagem ${index}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default CarrosselDeImagens;
