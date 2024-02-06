// Pagamento.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

const Pagamento = () => {
    const navigate = useNavigate();

    const concluirCompra = () => {
        // Implemente a lógica de conclusão de compra aqui
        console.log('Compra concluída com sucesso!');
        navigate('/'); // Redireciona para a página inicial ou de sucesso
    };

    return (
        <div>
            <h1>Página de Pagamento</h1>
            <p>Detalhes do pagamento...</p>
            <Button type="primary" onClick={concluirCompra}>Concluir Compra</Button>
        </div>
    );
}

export default Pagamento;
