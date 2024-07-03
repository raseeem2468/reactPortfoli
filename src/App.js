import React from 'react';
// import { Outlet } from 'react-router-dom';
import Header from './components/Header'; // Ensure the path to Header component is correct
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <>
      <Header />
      <HomePage/>
      {/* <Outlet /> */}
      
    </>
  );
};

export default App;
