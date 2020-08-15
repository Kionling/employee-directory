import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Jumbotron from './components/jumbotron';

function App() {
  return (
    <div className="">
      <Navbar />
      <Jumbotron />
      <Footer />
    </div>
  );
}

export default App;
