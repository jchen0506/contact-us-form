import React from 'react';
import { useState, useEffect } from 'react';
const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bod, setBOD] = useState('');
  const [isChecked, setChecked] = useState(false);
  const [valid, setValid] = useState(false);

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
    </div>
  );
};

export default App;
