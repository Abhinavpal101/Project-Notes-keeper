import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [items, setItem] = useState([]);

  function handleAdd(note){
    setItem((prevItems)=> {
      return [...prevItems,note];
    });
  }

  function deleteItem(id){
    setItem((prevItems)=>{
      return prevItems.filter((item, index)=>{
      return index!==id});
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={handleAdd}/>
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      {items.map((item, index)=>{
        return <Note key={index} id={index} title={item.title} content={item.content} deleting={deleteItem}/>;
      })}
      <Footer />
    </div>
  );
}

export default App;
