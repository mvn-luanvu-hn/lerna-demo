import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ExampleComponent, HiComponent } from '@luanvuvt/ui-react'

function App() {
  return (
    <div className="App">
      <ExampleComponent text="hello" />
      <HiComponent />
    </div>
  );
}

export default App;
