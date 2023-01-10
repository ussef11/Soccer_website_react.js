import { useState } from 'react';
import axios, * as others from 'axios';
import { useNavigate } from 'react-router-dom';
import authService from '../Services/auth.service';
import './login.css'
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const [username ,  setusername] = useState();
    const [password ,  setpassword] = useState();
    const [seccessful , setSeccussful] = useState()
    const [message , setMessage] = useState("")
    const navigate = useNavigate()

    const handlesubmit = (e)=>{
      e.preventDefault();
         if(username == "youssef" && password == "123456789"){
          sessionStorage.setItem("login", username)
          sessionStorage.setItem("password", password)
          let  logi = sessionStorage.getItem("login")
          window.location.replace("http://localhost:3000/");
          console.log(logi)

          setMessage("Login good")
         }else{
          setMessage("Login Not Good")
         }
    
    // authService.login(username, password).then((res)=>{
     
      
    //   navigate("/");
    //   window.location.reload();
    // }).catch((err)=>{
    //   setSeccussful(true)
    //   setMessage(err.response.data.message)
    //   console.log(err.response.data.message)
      
    // })

  }

//  const handlesubmit = (e)=>{
//     e.preventDefault();
   
//     fetch("http://localhost:3001/api/auth/signin/",
//      {method: "POST",
//      headers: { "Content-Type": "application/json" },
//      body :  JSON.stringify({ username :username ,password :password })}
//      )
//       .then(response => {response.text()
//         if (response.data.accessToken) {
//             localStorage.setItem("user", JSON.stringify(response.data));
//           }})
//       .then(result =>{
       
//         console.log(result)
//         alert('login')
//         navigate("/")}
//       )
//       .catch(error => alert('error', error));

    return (
      <> 
      <Helmet>  
<meta
      name="description"
    
      content="كورة لايف,koora live,مشاهدة مباريات اليوم بث مباشر,live koora,بدون تقطيع عبر موقع كوره لايف,koora live 96,اون لاين,kooralive,لنقل المباريات لايف,koora live tv,لايف كورة,kora live"

      data-rh="true"
    />
    <title>TawfikShoot - Login</title>
    <link rel="canonical" href="/Login" />
</Helmet>

      <div className="login"> 
      <div style={{textAlign:'center'}} className="title">
      <h3 style={{color:"white"}}>  {seccessful && message} </h3> 
      </div>
        <form onSubmit={handlesubmit}>
        <input className='int' placeholder='username' type="text" value={username} onChange={(e)=>{setusername(e.target.value)}} />
        <input  className='int' placeholder='password' type="text" value={password} onChange={(e)=>{setpassword(e.target.value)}} />
        <input className='button' type="submit" value='LOGIN' />
        </form>
        </div>
        </>
     );
}
 
export default Login;