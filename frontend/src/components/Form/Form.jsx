import { useState } from "react";
import validation from "../../validation";
import './Form.css'

const Form = ({login}) => {

  const [inputData, setInputData] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputData({
      ...inputData,
      [name]: value,
    });

    setErrors(validation({
      ...inputData,
      [name]: value,
    }))
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    login(inputData);
  };

  return (
    <div className="divForm">
      <form onSubmit={handleSubmit} className="formLogin">
        <label>Email</label>
        {false && <p>Visible</p>}
        <input
          type="email"
          key="email"
          value={inputData.email}
          onChange={handleChange}
          name="email"
          className="input"
          placeholder="Email..."
        ></input>
        {errors.email && <p className="errors">{errors.email}</p>}

        <label>Password</label>
        <input
          type="password"
          key="password"
          value={inputData.password}
          onChange={handleChange}
          name="password"
          className="input"
          placeholder="Password..."
        ></input>
        {errors.password && <p className="errors">{errors.password}</p>}

        <button 
        className="button" 
        data-text="Awesome" 
        type="submit" 
        /* disabled={errors.email || errors.password} */>

          <span className="actual-text">&nbsp;Submit&nbsp;</span>
          <span aria-hidden="true" className="hover-text">
            &nbsp;Submit&nbsp;
          </span>

        </button>
      </form>
    </div>
  );
}

export default Form