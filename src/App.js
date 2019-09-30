import React from 'react';
import './App.css';
import FlashCard from './components/FlashCard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Flash Card App</h1>
      </header>
      <main>
          <FlashCard question='What is your name?' answer='Marloes' />
          <FlashCard question='What is your age?' answer='25' />
      </main>
    </div>
  );
}

export default App;
