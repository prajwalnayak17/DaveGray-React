import React from "react";
import { FaPlus } from "react-icons/fa";

const AddItem = () => {
  return (
    <form className="addForm">
      <label htmlFor="item">Add Item</label>
      <input
        autoFocus
        type="text"
        id="addItem"
        placeholder="Add Item"
        required
      />
      <button className="addBtn" type="submit" aria-label="Add Item">
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
