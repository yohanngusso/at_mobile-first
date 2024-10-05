import { useState } from 'react';
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button
} from '@mui/material';

const Carrinho = () => {
  // Lista de itens no carrinho com nome, valor unitário e quantidade
  const [itens, setItens] = useState([
    { id: 1, nome: 'Camiseta', preco: 49.99, quantidade: 2 },
    { id: 2, nome: 'Calça Jeans', preco: 99.99, quantidade: 1 },
    { id: 3, nome: 'Tênis', preco: 150.0, quantidade: 1 },
  ]);

  // Calcular o total de cada item
  const calcularTotalItem = (item) => {
    return item.preco * item.quantidade;
  };

  // Calcular o total da compra
  const calcularTotalCompra = () => {
    return itens.reduce((acc, item) => acc + calcularTotalItem(item), 0).toFixed(2);
  };

  // Função para aumentar a quantidade de um item
  const aumentarQuantidade = (id) => {
    setItens((prevItens) =>
      prevItens.map((item) =>
        item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
      )
    );
  };

  // Função para diminuir a quantidade de um item
  const diminuirQuantidade = (id) => {
    setItens((prevItens) =>
      prevItens.map((item) =>
        item.id === id && item.quantidade > 1
          ? { ...item, quantidade: item.quantidade - 1 }
          : item
      )
    );
  };

  return (
    <Container className="cart-container">
      <Typography variant="h4" component="h1" gutterBottom>
        Carrinho de Compras
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Produto</TableCell>
              <TableCell align="right">Valor Unitário</TableCell>
              <TableCell align="right">Quantidade</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="center">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {itens.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.nome}</TableCell>
                <TableCell align="right">R$ {item.preco.toFixed(2)}</TableCell>
                <TableCell align="right">{item.quantidade}</TableCell>
                <TableCell align="right">R$ {calcularTotalItem(item).toFixed(2)}</TableCell>
                <TableCell align="center">
                  <Button onClick={() => aumentarQuantidade(item.id)}>+</Button>
                  <Button onClick={() => diminuirQuantidade(item.id)}>-</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h6" className="total-compra">
        Total da Compra: R$ {calcularTotalCompra()}
      </Typography>
    </Container>
  );
};

export default Carrinho;
