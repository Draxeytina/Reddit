import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import StocksScreen from './components/Stocks';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/stock%details" />
          <Route exact path="/home" element={<StocksScreen />} />
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
