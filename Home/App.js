import React from 'react';
import './App.css';
import Header from '.Header';
import MainContent from '.MainContent';

function App() {
  return (
    <div className="App">
      <Header />
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <MainContent />
      <footer>
        <p>&copy; 2023 My Home Page</p>
      </footer>
    </div>
  );
}

export default App;
