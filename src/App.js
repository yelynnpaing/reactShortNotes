import React,{useRef, useState} from 'react';
import './App.css';

const Items = ({name, price}) =>{
  return(
    <li>
      {name}, ${price}
    </li>
  )
}

const App = props =>{

  let [items, setItems] = useState([
    {id:1, name:"apple", price:10},
    {id:2, name:"orange", price:8},
  ]);

  let nameRef = useRef();
  let priceRef = useRef();

  const add = props =>{
    if(nameRef.current.value === "" || priceRef.current.value === ""){
      alert("Type into the Input Area")
    }else{
      let id = items.length + 1;
      let name = nameRef.current.value;
      let price = priceRef.current.value;
      return(
        setItems([
          ...items,
        {id, name ,price},
        ]),
        nameRef.current.value = null,
        priceRef.current.value = null
      )
  }
    }
    
  return (
    <div className="App-header">
      <ul>
        {items.map(i =>
          <Items 
            key={i.id}
            name={i.name} 
            price= {i.price} 
          />
        )}
      </ul>
      <input ref={nameRef} /> <span style={{display:"none", color:"red"}}>Write Alphabet Only !</span> <br/>
      <input ref={priceRef} /> <br/>
      <button onClick={add}>Add Item</button>
    </div>
  )
}

export default App;

