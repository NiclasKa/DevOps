import React, { useEffect, useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
const axios = require('axios');

function App() {
  const [response, setResponse] = useState("");
  const [requestUrl, setRequestUrl] = useState("");

  const local = window.location.hostname + ":" +window.location.port;

  useEffect(() => {
    axios.get('https://api.ipify.org?format=jsonp?callback=?').then(function(response) {  
      setRequestUrl(response.data);
    }).catch(function(err) {
      console.log(err);
    });
  }, []);

  function onPing() {
    axios.get('http://localhost:3000/ping').then(function(response) {  
      setResponse(response.data);
    }).catch(function(err) {
      setResponse("Error!");
      console.log(err);
    });
  };

  return (
    <div className="App">
      <h1>Hello from {requestUrl} to {local}.</h1>
      <p> Use the following button to ping the backend:</p>
      <Button variant="contained" color="primary" onClick={() => onPing()}>
      Ping
      </Button>
      <p>Response: {response}</p>
    </div>
  );
}

export default App;
