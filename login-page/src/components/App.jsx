import React from "react";
import Login from "./Login"

var isLoggedIn = false;
var isRegistered = false;




function App() {
  return (
    <div className="container">
      {isLoggedIn? <h1>Hello</h1>:<Login isRegistered = {isRegistered}/>}
    </div>
  );
}

export default App;
