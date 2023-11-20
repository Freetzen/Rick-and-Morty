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
        <input
          type="email"
          key="email"
          value={inputData.email}
          onChange={handleChange}
          name="email"
          class="input"
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
          class="input"
          placeholder="Password..."
        ></input>
        {errors.password && <p className="errors">{errors.password}</p>}

        <button 
        class="button" 
        data-text="Awesome" 
        type="submit" 
        /* disabled={errors.email || errors.password} */>

          <span class="actual-text">&nbsp;Submit&nbsp;</span>
          <span aria-hidden="true" class="hover-text">
            &nbsp;Submit&nbsp;
          </span>

        </button>
      </form>
    </div>
  );
}

export default Form