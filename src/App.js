import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/missions" />
          <Route exact path="/rockets" />
          <Route
            path="*"
            element={
              <section className="flex-center"><div className="container text-center">404 Page not found</div></section>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
