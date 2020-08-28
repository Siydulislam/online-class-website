import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <h1 className="text-secondary text-center mt-5 ">Our Online Courses</h1>
      <Shop></Shop>
    </div>
  );
}

export default App;
