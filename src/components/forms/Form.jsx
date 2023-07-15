import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import './Form.css';

const regExEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,10}/;

export default function Form({ login }) {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [inputsErrors, setInputsErrors] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const validate = (inputs) => {
    const errors = {};
    if (!inputs.email) errors.email = "Email is null";
    if (inputs.email.length < 6) errors.email = "Email contain 6 characters";

    if (!regExEmail.test(inputs.email)) errors.email = "Email Will be Email";
    if (!regexPassword.test(inputs.password)) errors.password = "Password ... ";
    if (inputs.password.length < 6)
      errors.password = "Password must contain 6 characters";
    if (!inputs.password) errors.password = "Password is null";
    return errors;
  };
  //! el set es ASYNC
  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
      // email: dede
    });
    setInputsErrors(
      validate({
        ...inputs,
        [event.target.name]: event.target.value,
      })
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let aux = Object.keys(inputsErrors);
   
    if (aux.length === 0) {
    
      setInputs({
        email: "",
        password: "",
      });
      setInputsErrors({
        email: "",
        password: "",
      });
      login(inputs);

    
    } else {
      return alert("Error");
    }
  };



    return(
        <>
 <div id="sectionF">
        <form onSubmit={handleSubmit}>
          <h1>Bienvenidos!!!</h1>
          <div id="inputs">
            <label>Email: </label>
            <input
              type="text"
              key="email"
              name="email"
              value={inputs.email}
              onChange={handleChange}
            ></input>
            <span>{inputsErrors?.email && inputsErrors.email}</span>
            <hr></hr>
            <label>Password: </label>
            <input
              type="password"
              key="password"
              name="password"
              value={inputs.password}
              onChange={handleChange}
            ></input>
            <span>{inputsErrors?.password && inputsErrors.password}</span>
          </div>
        
           <div id="btnDiv">
           {Object.keys(inputsErrors).length === 0 ? (
            <button id="btn" type="submit">Ingresar</button>
          ) : null}

          <Link to="/home">
          <button id="btn">Ingresar</button></Link>
           </div>
        </form>
</div>
        </>
    )
}