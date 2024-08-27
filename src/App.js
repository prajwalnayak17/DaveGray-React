// import logo from './logo.svg';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([
    {
      item: "Apple",
      id: 1,
      checked: false,
    },
    {
      item: "Banana",
      id: 2,
      checked: false,
    },
    {
      item: "Cereal",
      id: 3,
      checked: false,
    },
  ]);
  const handleCheck = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("items", JSON.stringify(listItems));
  };
  

  return (
    <div className="App">
      <Header title="Samaannnn" />
      <Content 
        items={items} 
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
