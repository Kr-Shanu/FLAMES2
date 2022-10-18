import React, { useState } from 'react';
// import './App.css';
import './components/Navbar'
import Navbar from './components/Navbar';
import Form from "./components/Form";
import Relation from "./components/Relation"

function App() {

  const [name, setNewName] = useState("");
  const [crush, SetCrushNewName] = useState("");
  const [clicked, setClick] = useState(false);

  // function to handle when name changes
  function handleNameChange(event) {
    const newName = event.target.value;
    // console.log("Log when name changes : " + newName);
    setNewName(newName);
  }

  // function to handle when crush name changes
  function handleCrushNameChange(event) {
    const crushNewName = event.target.value;
    // console.log("Log when crush name changes : " + crushNewName);
    SetCrushNewName(crushNewName);
  }

  // function to handle submit button
  function handleClick() {
    setClick((prev) => {
      return !prev;
    })
  }

  return (
    <div>
      <Navbar />
      <Form
        handleClick={handleClick}
        name={name}
        crush={crush}
        handleCrush={handleCrushNameChange}
        handleName={handleNameChange}
        submit = {clicked === true?"clear":"submit"}
      />
      {clicked === true &&
        <Relation
          name={name}
          crush={crush}
        />
      }
    </div>
  );
}

export default App;