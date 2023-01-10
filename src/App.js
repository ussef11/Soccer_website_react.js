import { BrowserRouter, Routes,  Route } from "react-router-dom";
import React from "react";
import Navbar from "./NavBAR/NavBar";
import HomePage from "./Home/home";
import AddChannels from './admin/addChannels'
import Testpage from './test/test'
import LivePage from './Lives/LivePage'
import  Register from './Authentication/register.component'
import Login from "./Authentication/login.component";
import Admin from './Authentication/Admin.component'
import AddContent from './AddContent/AddContent'
import AddArticles from './AddContent/AddArticles'
function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<HomePage/>}></Route>
    <Route path="/test" element={<Testpage/>}> </Route>
     <Route path="/add" element={<AddChannels/>} ></Route>
     <Route path="/Live/:id/:hometeam/:awayteam" element={<LivePage/>} ></Route>
     <Route path="/Register" element={<Register/>} ></Route>
     <Route path="/Login" element={<Login/>} ></Route>
     <Route path="/admin" element={<Admin/>} ></Route>
     <Route path="/AddContent/:id" element={<AddContent/>} ></Route>
     <Route path="/AddArticles" element={<AddArticles/>} ></Route>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
