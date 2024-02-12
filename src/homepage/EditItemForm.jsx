import React, { useState } from 'react';


const EditItemForm = ({ onSaveChanges, itemToEdit, onCancelEdit }) => {
  const [editedItem, setEditedItem] = useState(itemToEdit);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveChanges(editedItem);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={editedItem.title} onChange={handleChange} />
      </label>
      <label>
        Description:
        <textarea name="description" value={editedItem.description} onChange={handleChange} />
      </label>
      <label>
        Price:
        <input type="number" name="price" value={editedItem.price} onChange={handleChange} />
      </label>
      <label>
        Stock:
        <input type="number" name="stock" value={editedItem.stock} onChange={handleChange} />
      </label>
      <button type="submit">Save Changes</button>
      <button type="button" onClick={onCancelEdit}>Cancel</button>
    </form>
  );
};

export default EditItemForm;
