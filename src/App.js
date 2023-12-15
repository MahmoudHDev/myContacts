import React, { useState, useEffect } from 'react';

const App = () => {
  const [apiResponse, setAPIResponse] = useState("");

  const callAPI = () => {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => setAPIResponse(res))
      .catch(error => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    callAPI();
  }, []); // Empty dependency array to run this effect only once (on mount)

  return (
    <div>
      <h1>API Response:</h1>
      <p className="App-intro">;{apiResponse}</p>
    </div>
  );
};

export default App;
