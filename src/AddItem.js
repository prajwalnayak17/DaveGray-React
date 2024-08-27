import React from "react";
import { FaPlus } from "react-icons/fa";
import { useRef } from "react";
const AddItem = ({ newItem,setNewItem,handleSubmit }) => {
  return (
    <form className="addForm" onSubmit={(handleSubmit)} >
      <label htmlFor="item">Add Item</label>
      <input
        autoFocus
        ref={useRef()}
        type="text"
        id="addItem"
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button className="addBtn" 
      type="submit" 
      aria-label="Add Item"
    //   onClick={()=>inputRef.current.focus()  }
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
