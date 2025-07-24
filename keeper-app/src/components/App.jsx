import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Form from "./Form";
import notes from "../notes";

function App() {
  const [contentArray, setContentArray] = useState([]);

  function addItem(inputText) {
    setContentArray((prevArray) => {
      return [...prevArray, inputText];
    });
    console.log(contentArray);
  }

  return (
    <div>
      <Header />
      <Form onAdd={addItem} />
      {contentArray.map((item) => (
        <Note key={item.key} title={item.title} content={item.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
