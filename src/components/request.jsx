import React, { useState } from 'react';
import '../achievement.css';
import { Link } from 'react-router-dom';
function Request() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [request, setRequest] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle form submission logic, such as sending data to the server
    alert('Your request registered successfully');
  };

  const handleClear = () => {
    setName('');
    setMobile('');
    setAddress('');
    setRequest('');
  };

  return (
    <div id='cs'>
      <h1>Customer Service</h1>
      <form onSubmit={handleSubmit} id='form'>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <br />
        <label>
          Mobile Number:
          <input type="tel" value={mobile} onChange={(event) => setMobile(event.target.value)} />
        </label>
        <br />
        <label>
          Address:
          <textarea value={address} onChange={(event) => setAddress(event.target.value)} />
        </label>
        <br />
        <label>
          Request to:
          <textarea value={request} onChange={(event) => setRequest(event.target.value)} />
        </label>
        <br />
        <button type="submit" class='btn btn-success'>Submit</button>
        <button type="button"  class='btn btn-danger' onClick={handleClear}>Clear</button>
      </form>
    </div>
  );
}

export default Request;
