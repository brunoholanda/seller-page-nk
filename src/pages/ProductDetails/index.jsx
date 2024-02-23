import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Slider from 'react-slick';
import { ProdutoContext, useProduto } from 'components/Context/ProdutoContext'; // Importe o contexto do produto
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import mp from '../../assets/icons/mp.png';
import ReactMarkdown from 'react-markdown';


import {
  StyledContainer,
  StyledRow,
  StyledCol,
  ProductImage,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  BuyButton,
  StyledButton,
  StyledRowDescription,
  StyledRowBack,
  MarkdownContainer
} from './styles';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';

function NextArrow(props) {
  const { onClick } = props;
  return <CaretRightOutlined className="slick-next" onClick={onClick} style={{ color: '#0286e7', fontSize: '25px', cursor: 'pointer', zIndex: 20 }} />;
}

function PrevArrow(props) {
  const { onClick } = props;
  return <CaretLeftOutlined className="slick-prev" onClick={onClick} style={{ color: '#0286e7', fontSize: '25px', cursor: 'pointer', zIndex: 20 }} />;
}

export default function ProductDetails() {
  const { id } = useParams();
  const { findProdutoById } = useProduto();
  const navigate = useNavigate(); // Use o hook useNavigate aqui


  const { produtos } = useContext(ProdutoContext);

  if (!produtos) {
    return <div>Produtos não disponíveis</div>;
  }

  const produto = findProdutoById(id);

  if (!produto) {
    return <div>Produto não encontrado</div>;
  }
  

  const sliderSettings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const loadMercadoPagoSDK = () => {
    return new Promise((resolve, reject) => {
      if (window.MercadoPago) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = "https://sdk.mercadopago.com/js/v2";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        resolve();
      };

      script.onerror = (error) => {
        reject(error);
      };
    });
  };
  const initMercadoPago = () => {
    loadMercadoPagoSDK().then(() => {
      if (!window.MercadoPago) {
        console.error('SDK do MercadoPago não está carregado.');
        return;
      }

      const mp = new window.MercadoPago('TEST-0f4f4060-a4af-4549-a662-3a7528d5e6eb', { locale: 'pt-BR' });

      fetch('http://127.0.0.1:3333/create_preference', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          itemDetails: {
            title: produto.nome,
            description: produto.descricao,
            unit_price: produto.preco
          }
        }),
      })
        .then(response => response.json())
        .then(data => {
          mp.checkout({
            preference: {
              id: data.id
            },
            autoOpen: true,
          });
        })
        .catch(error => console.error('Erro ao criar a preferência de pagamento:', error));
    }).catch(error => console.error('Erro ao carregar SDK do MercadoPago:', error));
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <StyledContainer>
      <StyledRowBack>
        <CaretLeftOutlined onClick={handleBack} style={{ color: '#0286e7', fontSize: '25px', cursor: 'pointer' }} />
        <p>Voltar</p>
      </StyledRowBack>
      <StyledRow>
        <h1>{produto.nome}</h1>
        <StyledCol xs={12} md={6}>
          <Slider {...sliderSettings}>
            {produto.imagens.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Imagem ${index}`} />
              </div>
            ))}
          </Slider>
        </StyledCol>
      </StyledRow>
      <StyledRowDescription xs={12} md={6}>
        <ProductDescription>{produto.descricao}</ProductDescription>
        <ProductPrice>Por Apenas: R$ {produto.preco},00</ProductPrice>
        <StyledButton variant="primary" onClick={initMercadoPago}>Compre com MercadoPago <img src={mp} alt="icone mercadopago" /></StyledButton>
      </StyledRowDescription>
      <MarkdownContainer>
        <ReactMarkdown>{produto.detalhe.replace(/\\n/g, '\n')}</ReactMarkdown>
      </MarkdownContainer>
    </StyledContainer>
  );
}
