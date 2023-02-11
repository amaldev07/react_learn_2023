import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

class Home extends React.Component {
  render() {
    return <h1>Home</h1>;
  }
}

class About extends React.Component {
  render() {
    return <h1>About</h1>;
  }
}

class Contact extends React.Component {
  render() {
    return <h1>Contact</h1>;
  }
}

export default App;