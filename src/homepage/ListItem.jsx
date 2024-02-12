import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({ product, onDelete }) => {
  const handleDelete = () => {
    // Chama a função onDelete com o ID do produto para lidar com a exclusão
    onDelete(product.id);
  };

  // Função para renderizar o checkmark com base na disponibilidade do produto
  const renderCheckMark = (stock) => {
    return stock > 0 ? '✔️' : '❌';
  };

  const listItemStyle = {
    padding: '20px',
    marginBottom: '20px',
    width: '30%', // Defina a largura para exibir 3 itens lado a lado
    marginRight: '20px', // Adicione margem à direita para espaçamento entre os itens
  };

  const imageStyle = {
    maxWidth: '150px',
    maxHeight: '150px',
    marginRight: '20px',
  };

  return (
    <li style={listItemStyle}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={product.images[0]}
          alt="Product Thumbnail"
          style={imageStyle}
        />
        <div>
          <p>Title: {product.title}</p>
          <p>Price: ${product.price}</p>
          <p>Availability: {renderCheckMark(product.stock)}</p>
          <button onClick={handleDelete}>Delete</button>
          <Link to={`/item/${product.id}`}>
            <button>View Details</button>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default ListItem;