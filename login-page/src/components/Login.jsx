import React from "react";
import Input from "./Input";

var isRegistered = true;


function Login() {
    return (<form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        {isRegistered === false && <Input type="password" placeholder="Confirm Password" /> }
        {isRegistered? <button type="submit">Login</button> : <button type="submit">Register</button> }
      </form>);
}

export default Login;