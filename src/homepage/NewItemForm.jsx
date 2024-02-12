// NewItemForm.js
import React, { useState } from 'react';

const NewItemForm = ({ onAddItem }) => {
  const [newItem, setNewItem] = useState({
    title: '',
    description: '',
    price: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation can be added here if needed

    // Pass the new item to the parent component
    onAddItem(newItem);

    // Reset the form after submission
    setNewItem({
      title: '',
     
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={newItem.title} onChange={handleChange} required />
      </label>
      {/* Add similar input fields for other properties */}
      <button type="submit">Add Item</button>
    </form>
  );
};

export default NewItemForm;
