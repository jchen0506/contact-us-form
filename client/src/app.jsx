import React from 'react';
import { useState, useEffect } from 'react';
import { validName, validEmail, validBod } from '../util/validation.js';
import axios from 'axios';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bod, setBOD] = useState('');
  const [isChecked, setChecked] = useState(false);
  const [valid, setValid] = useState(false);
  const [error, setError] = useState('');

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
    setSubmitted('');
  };

  var validation = () => {
    if (
      validName(name) === '' &&
      validEmail(email) === '' &&
      validBod(bod) === '' &&
      isChecked
    ) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  var formSubmit = (e) => {
    e.preventDefault();
    let info = {
      name: name,
      email: email,
      bod: bod,
      emailConsent: isChecked,
    };

    axios
      .post(
        'https://my-json-server.typicode.com/JustUtahCoders/interview-users-api/users',
        info
      )
      .then(() => {
        alert('Your information has been successfully submitted');
        setName('');
        setEmail('');
        setBOD('');
        setChecked(false);
      })
      .catch(() => {
        console.log('Error. Info did not be submitted');
      });
  };

  return (
    <div className="container">
      <h1>Contact Us</h1>
      <p id="notification">{error}</p>
      <form>
        <lable className="lables" htmlFor="name">
          Name
        </lable>

        <input
          className="info"
          id="name"
          onChange={nameChange}
          onBlur={() => setError(validName(name))}
          type="text"
          value={name}
          placeholder="Your full name"
        />

        <lable className="lables" htmlFor="email">
          Email
        </lable>
        <input
          id="email"
          className="info"
          onChange={emailChange}
          onBlur={() => setError(validEmail(email))}
          type="text"
          value={email}
          placeholder="name@domain.sth"
        />

        <lable className="lables" htmlFor="bod">
          Birth date
        </lable>
        <input
          id="bod"
          className="info"
          onChange={bodChange}
          onBlur={() => setError(validBod(bod))}
          type="text"
          value={bod}
          placeholder="YYYY-MM-DD"
        />
        <div id="consent">
          <input
            id="check"
            type="checkbox"
            checked={isChecked}
            onChange={checkChange}
          />
          <lable htmlFor="check">I agree to be contacted via email.</lable>
        </div>
        <div id="buttons">
          <button onClick={clearClick}>Clear</button>
          <button onClick={formSubmit} disabled={valid ? '' : 'disabled'}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
