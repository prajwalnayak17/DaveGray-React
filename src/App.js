// import logo from './logo.svg';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem';

function App() {
  const [items, setItems] = useState( JSON.parse(localStorage.getItem("items")) || [] );

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("items", JSON.stringify(newItems));
  }

  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem={item,id,checked:false};
    const listItems=[...items,myNewItem];
    setAndSaveItems(listItems);

  };

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
    setAndSaveItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem.trim()) return;
    addItem(newItem);
    setNewItem("");
    
  };
  

  return (
    <div className="App">
      <Header title="Samaannnn" />
      
      <AddItem 
        newItem={newItem} 
        setNewItem={setNewItem} 
        handleSubmit={handleSubmit}

      />
      <SearchItem 
        search={search} 
        setSearch={setSearch}
      />
      <Content 
        items={items.filter(item=> ((item.item).toLowerCase()).includes(search.toLowerCase()))}    
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
