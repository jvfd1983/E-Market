import React, { useState, useEffect } from 'react';
import dataJson from '../data/products.json';
import ListItem from './ListItem';

const List = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Embaralhe os dados aleatoriamente
    const shuffledData = shuffleArray(dataJson);
    // Pegue os primeiros três produtos
    const firstThreeProducts = shuffledData.slice(0, 3);
    setData(firstThreeProducts);
  }, []);

  const handleDelete = (productId) => {
    const updatedData = data.filter(product => product.id !== productId);
    setData(updatedData);
  };

  // Função para embaralhar um array aleatoriamente
  const shuffleArray = (array) => {
    const shuffled = array.slice(); // Crie uma cópia do array
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Gere um índice aleatório
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Troque os elementos
    }
    return shuffled;
  };

  return (
    <ul className="product-list">
      {data.map(product => (
        <ListItem key={product.id} product={product} onDelete={handleDelete} />
      ))}
    </ul>
  );
};

export default List;
