import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Jumbotron from './components/jumbotron';
import Search from "./components/search"

function App() {
  return (
    <div className="">
      <Navbar />
      <Jumbotron />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
