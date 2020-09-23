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
  const [submitted, setSubmitted] = useState('');

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
        setSubmitted('Your information has been successfully submitted');
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
    <div>
      <h1>Contact Us</h1>
      <form>
        <lable>
          Name:
          <input
            onChange={nameChange}
            onBlur={() => setError(validName(name))}
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
            onBlur={() => setError(validEmail(email))}
            type="text"
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
            placeholder="YYYY-MM-DD"
          />
        </lable>
        <br />
        <lable>
          <input type="checkbox" checked={isChecked} onChange={checkChange} />I
          agree to be contacted via email.
        </lable>
        <br />
        <button onClick={clearClick}>Clear</button>
        <button onClick={formSubmit} disabled={valid ? '' : 'disabled'}>
          Submit
        </button>
      </form>
      <p>
        {error} {submitted}
      </p>
    </div>
  );
};

export default App;
