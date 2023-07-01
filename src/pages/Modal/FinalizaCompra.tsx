import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Book } from '../../interfaces/Book.interface';
import axios from 'axios';

interface FinalizarCompraProps {
  open: boolean;
  onClose: () => void;
  books: Book[];
}

const FinalizarCompra: React.FC<FinalizarCompraProps> = ({ open, onClose, books }) => {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [paymentMethod, setPaymentMethod] = useState('');
  const [installments, setInstallments] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleQuantityChange = (bookId: number, quantity: number) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [bookId]: quantity,
    }));
  };

  const calculateTotalPrice = () => {
    let total = 0;
    books.forEach(book => {
      const quantity = quantities[book.id] || 0;
      total += book.preco * quantity;
    });
    return total;
  };

  const updateTotalPrice = () => {
    const total = calculateTotalPrice();
    setTotalPrice(total);
  };

  const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPaymentMethod(e.target.value);
  };

  const handleInstallmentsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInstallments(parseInt(e.target.value));
  };

  React.useEffect(() => {
    updateTotalPrice();
  });

  const handleSubmit = async () => {
    try {
      // 1. Criar a venda
      const vendaResponse = await axios.post('http://localhost:8080/api/vendas', {
        id_cliente: localStorage.getItem('userId'),
        valortotal: totalPrice.toFixed(2),
        formapagamento: paymentMethod,
        numparcelas: installments.toString()
      });
  
      console.log('Dados da venda enviados:', {
        id_cliente: localStorage.getItem('userId'),
        valortotal: totalPrice.toFixed(2),
        formapagamento: paymentMethod,
        numparcelas: installments.toString()
      });
  
      // 2. Obter o ID da venda criada
      const vendaId = vendaResponse.data.id;
  
      // 3. Criar os itens de venda como objeto
      const itensVendas: { [key: number]: any } = {};
  
      books.forEach((book) => {
        itensVendas[book.id] = {
          id_venda: vendaId,
          id_produto: book.id,
          quantidade: quantities[book.id] || 0
        };
      });
  
      console.log('Dados dos itens de venda enviados:', itensVendas);
  
      await axios.post('http://localhost:8080/api/itensvendas', itensVendas);
  
      // Fechar o modal ou fazer outras ações necessárias
      onClose();
    } catch (error) {
      // Lidar com erros de requisição, se houver
      console.error(error);
    }
  };
  
  
  return (
    <Modal show={open} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Finalizar Compra</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {books.length === 0 ? (
          <p>O carrinho está vazio.</p>
        ) : (
          <>
            <ul>
              {books.map(book => (
                <li key={book.id}>
                  <div style={{ fontWeight: 'bold' }}>{book.titulo} </div>
                  <br /><img src={book.capa} alt={book.titulo} height={130}/>
                  <br />
                  Quantidade:
                  <Form.Control
                    type="number"
                    value={quantities[book.id] || ''}
                    onChange={e => handleQuantityChange(book.id, parseInt(e.target.value))}
                  />
                  <br />
                </li>
                
              ))}
            </ul>

            <p>Total: ${totalPrice.toFixed(2)}</p>

            <div>
              <Form.Label>Meio de Pagamento:</Form.Label>
              <Form.Select value={paymentMethod} onChange={handlePaymentMethodChange}>
                <option value="">Selecione</option>
                <option value="credit">Cartão de Crédito</option>
                <option value="debit">Cartão de Débito</option>
                <option value="cash">Dinheiro</option>
              </Form.Select>
            </div>

            {paymentMethod === 'credit' && (
              <div>
                <Form.Label>Número de Parcelas:</Form.Label>
                <Form.Control
                  type="number"
                  value={installments}
                  onChange={handleInstallmentsChange}
                />
              </div>
            )}
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Fechar
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Confirmar Compra
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FinalizarCompra;