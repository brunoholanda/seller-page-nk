// Pagamento.js
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, InputNumber } from 'antd';
import { useProduto } from 'components/Context/ProdutoContext';

const Pagamento = () => {
    const paypalRef = useRef(); // Ref para o contêiner do botão do PayPal
    const navigate = useNavigate();
    const { produto } = useProduto();

    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://www.paypal.com/sdk/js?client-id=Ae-V5MaqGMXeIRX5R8HdXPHs0xR6l4r-XLJsec8XHJiHGXQDOm-Z8QKWMAF7OL8qXx88jW057sHSrMet&currency=BRL`; // Substitua SUA_CLIENT_ID pela sua client-id do PayPal
        script.onload = () => {
            window.paypal.Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            description: produto.nome,
                            amount: {
                                currency_code: 'BRL',
                                value: produto.preco, // Preço do produto
                            },
                        }],
                    });
                },
                onApprove: (data, actions) => {
                    return actions.order.capture().then(details => {
                        console.log('Compra concluída com sucesso', details);
                        concluirCompra(); // Função que trata a conclusão da compra
                    });
                },
                onError: (err) => {
                    console.error('Erro ao processar o pagamento:', err);
                }
            }).render(paypalRef.current);
        };
        document.body.appendChild(script);
    
        return () => {
            document.body.removeChild(script);
        };
    }, [produto]); // Dependências do useEffect

    const concluirCompra = () => {
        console.log('Compra concluída com sucesso!');
        navigate('/'); // Redireciona para a página inicial ou de sucesso
    };

    return (
        <div>
            <div>
                <h1>Cadastro para Compra</h1>
                <p>Produto selecionado: {produto.nome} - R$ {produto.preco}</p>
            </div>
            <h1>Página de Pagamento</h1>
            <Form layout="vertical" ref={paypalRef}>
                <Form.Item label="Número do Cartão" name="cardNumber" rules={[{ required: true, message: 'Por favor, insira o número do cartão!' }]}>
                    <Input placeholder="1234 1234 1234 1234" />
                </Form.Item>
                <Form.Item label="Nome do Titular" name="cardName" rules={[{ required: true, message: 'Por favor, insira o nome do titular do cartão!' }]}>
                    <Input placeholder="JOÃO DA SILVA" />
                </Form.Item>
                <Form.Item label="Data de Validade (MM/AA)" name="cardExpiration" rules={[{ required: true, message: 'Por favor, insira a data de validade!' }]}>
                    <Input placeholder="MM/AA" />
                </Form.Item>
                <Form.Item label="CVV" name="cardCvv" rules={[{ required: true, message: 'Por favor, insira o CVV!' }]}>
                    <InputNumber min={100} max={999} style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" onClick={concluirCompra}>Concluir Compra</Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Pagamento;
