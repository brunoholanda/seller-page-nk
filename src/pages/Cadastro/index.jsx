// Cadastro.js
import React from 'react';
import { Form, Row, Col } from 'antd';
import { StyledForm, StyledInput, StyledButton, CadastroPage } from './styles'; // Ajuste o caminho conforme necessário
import { useProduto } from 'components/Context/ProdutoContext';
import { useNavigate } from 'react-router-dom';
import Checkout from 'components/Checkout';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const Cadastro = () => {
    const [form] = Form.useForm();
    const { produto } = useProduto();
    const navigate = useNavigate();

    const initialOptions = {
        "client-id": "AZ9gy1sEspvcJhUawtOQYSSx8YTGYUCkpQxcXxIyq7so5bJ5D24qYsdm0v7zK66fH3OwTYTKeldX2FRL",
        currency: "BRL",
        intent: "capture",
    };


    if (!produto) {
        return <p>Produto não selecionado</p>;
    }
    const handleSubmit = async (values) => {
        console.log('Form Submit', values);

        const payload = {
            ...values,
            produtoNome: produto.nome,
            produtoPreco: produto.preco,
        };

        try {
            const clienteResponse = await fetch('http://127.0.0.1:3333/clientes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (clienteResponse.ok) {
                const clienteData = await clienteResponse.json();

                const pedidoPayload = {
                    cliente_id: clienteData.id,
                    nome_produto: produto.nome,
                    valor: produto.preco,
                };

                const pedidoResponse = await fetch('http://127.0.0.1:3333/pedidos', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(pedidoPayload),
                });
                if (pedidoResponse.ok) {
                    navigate('/pagamento');
                } else {
                    console.error('Erro ao criar pedido');
                }
            } else {
                console.error('Erro ao cadastrar cliente');
            }
        } catch (error) {
            console.error('Erro ao enviar dados para o backend:', error);
        }
    };


    const buscarCep = async (cep) => {
        if (cep.replace(/\D/g, '').length !== 8) {
            return;
        }

        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();

            if (data.erro) {
                form.setFields([
                    {
                        name: 'cep',
                        errors: ['CEP não encontrado.'],
                    },
                ]);
                return;
            }

            form.setFieldsValue({
                endereco: data.logradouro,
                bairro: data.bairro,
                cidade: data.localidade,
                estado: data.uf,
            });
        } catch (error) {
            console.error('Erro ao buscar CEP:', error);
        }
    };

    return (
        <>
            <div>
                <h1>Cadastro para Compra</h1>
                <p>Produto selecionado: {produto.nome} - R$ {produto.preco}</p>
            </div>

            <StyledForm form={form} onFinish={handleSubmit} layout="vertical">
                <Row gutter={16}>
                    <Col span={24}>
                        <StyledForm.Item label="Nome" name="nome" rules={[{ required: true, message: 'Por favor, insira seu nome!' }]}>
                            <StyledInput />
                        </StyledForm.Item>
                    </Col>
                    <Col span={12}>
                        <StyledForm.Item label="Telefone" name="telefone" rules={[{ required: true, message: 'Por favor, insira seu telefone!' }]}>
                            <StyledInput />
                        </StyledForm.Item>
                    </Col>
                    <Col span={12}>
                        <StyledForm.Item label="Email" name="email" rules={[{ required: true, message: 'Por favor, insira seu email!' }]}>
                            <StyledInput type="email" />
                        </StyledForm.Item>
                    </Col>
                    <Col span={8}>
                        <StyledForm.Item label="CEP" name="cep" rules={[{ required: true, message: 'Por favor, insira seu CEP!' }]}>
                            <StyledInput onBlur={(e) => buscarCep(e.target.value)} />
                        </StyledForm.Item>
                    </Col>
                    <Col span={16}>
                        <StyledForm.Item label="Endereço" name="endereco" rules={[{ required: true, message: 'Endereço não encontrado!' }]}>
                            <StyledInput readOnly />
                        </StyledForm.Item>
                    </Col>
                    <Col span={8}>
                        <StyledForm.Item label="Estado" name="estado" rules={[{ required: true, message: 'Por favor, insira o Estado!' }]}>
                            <StyledInput />
                        </StyledForm.Item>
                    </Col>
                    <Col span={16}>
                        <StyledForm.Item label="Cidade" name="cidade" rules={[{ required: true, message: 'Por favor, insira a Cidade!' }]}>
                            <StyledInput />
                        </StyledForm.Item>
                    </Col>
                    <Col span={16}>
                        <StyledForm.Item label="Bairro" name="bairro" rules={[{ required: true, message: 'Por favor, insira o Bairro!' }]}>
                            <StyledInput />
                        </StyledForm.Item>
                    </Col>
                    <Col span={8}>
                        <StyledForm.Item label="Número" name="numero" rules={[{ required: true, message: 'Por favor, insira o número!' }]}>
                            <StyledInput />
                        </StyledForm.Item>
                    </Col>
                    <Col span={16}>
                        <StyledForm.Item label="Complemento" name="complemento">
                            <StyledInput />
                        </StyledForm.Item>
                    </Col>
                </Row>

                <StyledButton type="primary" htmlType="submit">
                    Prossegiur para Pagamento
                </StyledButton>
     
            </StyledForm>
            <PayPalScriptProvider options={initialOptions}>
                    <Checkout />
                </PayPalScriptProvider>
        </>
    );
};

export default Cadastro;
