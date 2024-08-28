// import logo from './logo.svg';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState,useEffect } from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem';


function App() {
  const API_URL = "http://localhost:3500/items";
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
  }

  useEffect(() => {
    const fetchItems=async()=>{
      try{
        const response = await fetch(API_URL);
        if(!response.ok) throw Error("did not receince expexted");
        const listItems = await response.json();
        console.log(listItems);
        setItems(listItems);
        setFetchError(null);
      }
      catch(err){

        setFetchError(err.message);
      }finally{
        setIsLoading(false);
      }
    }
    setTimeout(() => {
      (async()=>await fetchItems())();  
    },2000  
    )

    
  }, []);

  

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
      <main>  
        {isLoading && <p>Loading...</p>}
        {fetchError && <p style={{color:"red"}} >{`Error: ${fetchError}`}</p>}

      
      {!fetchError && !isLoading && <Content 
        items={items.filter(item=> ((item.item).toLowerCase()).includes(search.toLowerCase()))}    
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        
      />
  }
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
