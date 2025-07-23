import React from "react";
import Input from "./Input";



function Login(props) {
  var isRegistered = props.isRegistered
    return (<form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        {isRegistered === false && <Input type="password" placeholder="Confirm Password" /> }
        <button type="submit">{isRegistered? 'Login' : 'Register' } </button>
      </form>);
}

export default Login;