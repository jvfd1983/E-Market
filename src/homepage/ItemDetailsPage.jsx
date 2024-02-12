
import React from 'react';
import { useParams } from 'react-router-dom';
import dataJson from '../data/products.json';

const ItemDetailsPage = () => {
  const { id } = useParams();
  const item = dataJson.find(item => item.id === parseInt(id));

  return (
    <div>
      
      {item && (
        <div>
          <h2>{item.title}</h2>
          <p>Description: {item.description}</p>
          <p> ${item.price}</p>
        
          <div>
            {item.images.map((image, index) => (
              <img key={index} src={image} alt={`Image ${index + 1}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetailsPage;
