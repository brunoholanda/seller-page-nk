import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function HomePage() {
  const product = {
    title: 'Produto Exemplo',
    description: 'Descrição do produto...',
    images: [
      'https://ae01.alicdn.com/kf/Ae6e62f6b30d44d9fa52e1edd0379b375P.jpg',
      'https://ae01.alicdn.com/kf/Sebb8d94c4d1747dfad05a6b5073bdbc0J.jpg',
      'https://ae01.alicdn.com/kf/S4df66b6aea8746cfba466568cea7269eH.jpg',
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
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <Slider {...sliderSettings}>
            {product.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Imagem ${index}`} />
              </div>
            ))}
          </Slider>
        </Col>
        <Col xs={12} md={6}>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>Preço: R$ {product.price}</p>
          <Button variant="primary">Comprar</Button>
        </Col>
      </Row>
    </Container>
  );
}

