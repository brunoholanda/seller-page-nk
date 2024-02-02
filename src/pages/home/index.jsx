import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from '../../assets/products/R36S/1.webp';
import image2 from '../../assets/products/R36S/2.webp';
import image3 from '../../assets/products/R36S/3.webp';

import {
  StyledContainer,
  StyledRow,
  StyledCol,
  ProductImage,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  BuyButton
} from './styles'; // Ajuste o caminho de importação conforme necessário

export default function HomePage() {
  const product = {
    title: 'O melhor VideoGame Retro Portatil !',
    description: 'Relembre os jogos que marcaram uma geracao inteira',
    images: [
      image1,
      image2,
      image3,
    ],
    price: 499.99,
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <StyledContainer>
      <StyledRow>
        <h1>{product.title}</h1>
        <StyledCol xs={12} md={6}>
          <Slider {...sliderSettings}>
            {product.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Imagem ${index}`} />
              </div>
            ))}
          </Slider>
        </StyledCol>
        </StyledRow>
        <StyledRow xs={12} md={6}>
          <ProductDescription>{product.description}</ProductDescription>
          <ProductPrice>Por Apenas: R$ {product.price}</ProductPrice>
          <BuyButton variant="primary">Comprar Agora !</BuyButton>
        </StyledRow>
    </StyledContainer>
  );
}

