import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Form from "./Form";

function App() {
  const [contentArray, setContentArray] = useState([]);

  function addItem(inputText) {
    setContentArray((prevArray) => {
      return [...prevArray, inputText];
    });
  }

  function deleteItem(id) {
    console.log("delete");

    setContentArray((prevArray) => {
      return prevArray.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <Form onAdd={addItem} />
      {contentArray.map((item, index) => (
        <Note
          key={index}
          id={index}
          title={item.title}
          content={item.content}
          onDelete={deleteItem}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
