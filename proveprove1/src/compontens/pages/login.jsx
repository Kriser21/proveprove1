
import React, { useState, useEffect } from 'react';
import Billede from '../img/overlook-victoria.jpg';


export default function Login() {
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [touched, setTouched] = useState(false);
  const [valid, setValid] = useState(false);
  useEffect(() => {
    setValid(name.length <= 10);
  });
  return (
    <section>

      <div className="Login">
      <h3>REVERVATION</h3>
      <img src={Billede} alt=""/>
  </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const isValid = touched && valid;
          if (isValid) {
            // setName(value);
            setName('');
            setPassword('')
          }
        }}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setTouched(true);
            setName(e.target.value);
          }}
        />
         <input
          type="text"
          value={password}
          onChange={(e) => {
            setTouched(true);
            setPassword(e.target.value);
          }}
        />
      </form>
      <p>name : {name}</p>
      <p>password : {password}</p>
    </section>
  );
}