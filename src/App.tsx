// App.tsx
import React, { useState } from 'react';
import './App.css';
import CarFactory from './assets/components/CarFactory';

function App() {
  return (
    <div className="App">
      <h1>Car Production Status</h1>
      <CarFactory />
    </div>
  );
}

export default App;
