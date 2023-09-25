import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Pro from './components/Pro';

function App() {
  return (
    <Router>
      <main>
        <Pro />
      </main>
    </Router>
  );
}

export default App;
