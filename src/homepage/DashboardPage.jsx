import React, { useState } from 'react';
import List from './List';
import NewItemForm from './NewItemForm';

function DashboardPage() {
  const [items, setItems] = useState([]);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <div style={{ margin: '20px' }}> {/* Adicionando espaço em todos os lados */}
      <h1 style={{ marginBottom: '20px' }}>Hot Deals!</h1> {/* Adicionando espaço abaixo do título */}
      <NewItemForm onAddItem={handleAddItem} style={{ marginBottom: '20px' }} /> {/* Adicionando espaço abaixo do formulário */}
      <List items={items} />
    </div>
  );
}

export default DashboardPage;
