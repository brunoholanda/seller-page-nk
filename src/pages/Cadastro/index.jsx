// Cadastro.js
import React, { useState } from 'react';
import { Form, Row, Col } from 'antd';
import { StyledForm, StyledInput, StyledButton } from './styles'; // Ajuste o caminho conforme necessário
import { useProduto } from 'components/Context/ProdutoContext';

const FormItem = Form.Item;

// Estilos personalizados usando Styled Components
const Cadastro = () => {
    const [form] = Form.useForm();
    const { produto } = useProduto();

    if (!produto) {
      return <p>Produto não selecionado</p>; // ou redirecione para uma página de erro ou lista de produtos
    }
    const handleSubmit = (values) => {
        console.log('Received values of form: ', values);
        // Implemente a lógica de envio aqui
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
                {/* Formulário de cadastro aqui */}
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
                <StyledForm.Item>
                    <StyledButton type="primary" htmlType="submit">
                        Cadastrar
                    </StyledButton>
                </StyledForm.Item>
            </StyledForm>
        </>
    );
};

export default Cadastro;
