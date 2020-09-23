import React from 'react';
import { useState, useEffect } from 'react';
import { validName, validEmail, validBod } from '../util/validation.js';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bod, setBOD] = useState('');
  const [isChecked, setChecked] = useState(false);
  const [valid, setValid] = useState(false);
  const [error, setError] = useState('This is the error message');

  useEffect(() => {
    validation();
  }, [name, email, bod, isChecked]);

  var nameChange = (e) => {
    setName(e.target.value);
  };

  var emailChange = (e) => {
    setEmail(e.target.value);
  };

  var bodChange = (e) => {
    setBOD(e.target.value);
  };

  var checkChange = () => {
    setChecked(!isChecked);
  };

  var clearClick = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setBOD('');
    setChecked(false);
  };

  var validation = () => {
    if (name.length > 0 && email.length > 0 && isChecked) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form>
        <lable>
          Name:
          <input
            onChange={nameChange}
            onBlur={() => validName(name)}
            type="text"
            value={name}
            placeholder="Your full name"
          />
        </lable>
        <br />
        <lable>
          Email:
          <input
            onChange={emailChange}
            onBlur={() => validEmail(name)}
            type="email"
            value={email}
            placeholder="Your Email"
          />
        </lable>
        <br />
        <lable>
          Birth date:
          <input
            onChange={bodChange}
            onBlur={() => setError(validBod(bod))}
            type="text"
            value={bod}
            placeholder="Your date of birth"
          />
        </lable>
        <br />
        <lable>
          <input type="checkbox" checked={isChecked} onChange={checkChange} />I
          agree to be contacted via email.
        </lable>
        <br />
        <button onClick={clearClick}>Clear</button>
        <button disabled={valid ? '' : 'disabled'}>Submit</button>
      </form>
      <p>{error}</p>
    </div>
  );
};

export default App;
