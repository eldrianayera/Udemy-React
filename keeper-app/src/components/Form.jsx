import React, { useState } from "react";

// ADD KEY FOR EACH CHILD
// BUILD DELETE FUNCTION AND BUTTON

function form(props) {
  const [inputText, setInputText] = useState({
    title: "",
    content: "",
  });

  function updateInputText(event) {
    const { name, value } = event.target;

    setInputText((prevArray) => {
      return {
        ...prevArray,
        [name]: value,
      };
    });
  }

  return (
    <form>
      <input
        onChange={updateInputText}
        name="title"
        placeholder="Title"
        type="text"
        value={inputText.title}
      />
      <textarea
        onChange={updateInputText}
        name="content"
        placeholder="Take a note..."
        rows="3"
        value={inputText.content}
      />
      <button
        onClick={() => {
          event.preventDefault();
          props.onAdd(inputText);
          setInputText({
            title: "",
            content: "",
          });
        }}
      >
        add
      </button>
    </form>
  );
}

export default form;
