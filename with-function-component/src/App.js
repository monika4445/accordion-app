import { useState, useEffect } from 'react';
import Accordion from './Accordion';
import './Accordion.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    fetch('https://countriesnow.space/api/v0.1/countries/capital')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(data => {
        setCountries(data.data);
        setIsLoading(false);
      })
      .catch(error => setError(error));
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Countries and Capitals</h1>
      <Accordion items={countries} />
    </div>
  );
}

export default App;
