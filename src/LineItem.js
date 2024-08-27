import React from 'react';
import { FaTrashAlt } from "react-icons/fa";

const LineItem = (item, handleCheck, handleDelete) => {
    return (
        <li className="item" key={item.key}>
          <input
            type="checkbox"
            checked={item.checked}
            onChange={() => handleCheck(item.id)}
          />
          <label
            onDoubleClick={() => handleCheck(item.id)}
            style={
              item.checked
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
          >
            {item.item}
          </label>
          <FaTrashAlt
            onClick={() => handleDelete(item.id)}
            role="button"
            tabIndex="0"
          />
        </li>
    );
};

export default LineItem;