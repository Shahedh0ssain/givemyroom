import React from "react";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/pages/Home/Home';
import Login from './Components/pages/Login/Login';
import Register from './Components/pages/Register/Register'
import Footer from './Components/pages/Footer/Footer';
import Navber from './Components/pages/Navber/Navber';





function App() {
  return (
    <div >
      <Navber></Navber>
    
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/products" element={<Products />}></Route> */}
        {/* <Route path="/order" element={
          <Requireauth>
            <Order></Order>
          </Requireauth>
        }></Route> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
