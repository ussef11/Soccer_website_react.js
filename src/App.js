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
import Blogs from './displayblogs/blogs'
import Blogpage from './blogpage/pageblog'
import Footer from './footer/footer'
import Publish from './aboutpages/publishwithus'
import Privacy from './aboutpages/privacy'
import Callus from './aboutpages/callus'
import DeleteArticle from './updateArticles/deleteArticles'

function App() {
  return (
    <div style={{backgroundColor:"#24241b"}} className="App">
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
     <Route path="/Blogs" element={<Blogs/>} ></Route>
     <Route path="/Blogpage/:id/:title" element={<Blogpage/>} ></Route>
     <Route path="/DMCA" element={<Publish/>} ></Route>
     <Route path="/privacy-policy" element={<Privacy/>} ></Route>
     <Route path="/contact-us" element={<Callus/>} ></Route>
     <Route path="/DeleteArticle" element={<DeleteArticle/>} ></Route>
  </Routes>
<Footer/>
  </BrowserRouter>
    </div>
  );
}

export default App;
