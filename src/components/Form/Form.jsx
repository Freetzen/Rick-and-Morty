import { useState } from "react";
import validation from "../../validation";

const Form = () => {

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


  return (
    <div>
      <form>
        <label>Email</label>
        <input 
        type="email" 
        key='email'
        placeholder="Email..."
        value={inputData.email}
        name="email"
        onChange={handleChange}
        />

        <label>Password</label>
        <input 
        type="password"
        key='password'
        placeholder="Email..."
        value={inputData.password}
        name="password"
        onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form