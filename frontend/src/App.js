import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [examples, setExamples] = useState([]);

  useEffect(() => {
    axios.get('/api/example')
      .then(response => {
        setExamples(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Examples</h1>
      <ul>
        {examples.map(example => (
          <li key={example.id}>{example.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
