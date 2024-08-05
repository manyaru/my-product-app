import React from 'react';
import { Card } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

// Replace with your first name or leave as an empty string
const firstName = "Alvin"; // Example: "Alvin"

const App = () => {
  return (
    <div className="App">
      <Card style={{ width: '18rem', margin: '20px auto', padding: '10px' }}>
        <Card.Body>
          <Name />
          <Price />
          <Description />
          <Image />
        </Card.Body>
      </Card>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h3>{firstName ? `Hello, ${firstName}` : "Hello, there!"}</h3>
        {firstName && <img src="https://via.placeholder.com/150" alt="Greeting" />}
      </div>
    </div>
  );
};

export default App;
