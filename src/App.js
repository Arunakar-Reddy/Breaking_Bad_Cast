import React, { useEffect, useState } from 'react';
import Header from './Components/ui/Header'
import CharacterGrid from './Components/Characters/CharacterGrid'
import Search from './Components/ui/Search'
import './App.css';


const App = () => {
  const [items,setItems] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [query,setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () =>{
      const response = await fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      const result = await response.json();
      //console.log(result);
      setItems(result)
      setIsLoading(false)
    }
    fetchItems();

  },[query])


  return (
    <div className="container">
        <Header />
        <Search getQuery={(q) => setQuery(q)}/>
        <CharacterGrid isLoading={isLoading} items = {items}/>
    </div>
  );
}

export default App;
