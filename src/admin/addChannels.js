import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../Hook/UseFetch";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import authHeader from '../Services/auth-header';
import authService from '../Services/auth.service';
import "./admin.css";
import { Alert } from "@mui/material";
import { useEffect } from "react";
import { textAlign } from "@mui/system";
import { Helmet } from 'react-helmet-async';

const AddChannels = () => {
  const [channel, setchannel] = useState();
  const [channelid, setchannelid] = useState();
  const [linkchaine, setlinkchaine] = useState();
  const [seccessful , setSeccussful] = useState()
  const [message , setMessage] = useState("")
  const [ispanding ,setispanding ] = useState(true);
  const { id } = useParams();

  const navigate = useNavigate();

  const handleChange = (event) => {
    setchannel(event.target.value);
  };

  let listChaine = [
    { name: "Bein Premium 1HD" },
    { name: "Bein 4HD" },
    { name: "Bein 3HD" },
    { name: "Ad Sport Premium" },
    { name: "arryadia" },
    { name: "Bein Premium 2HD" },
    { name: "Bein Premium 3HD" },
    { name: "Bein Sport Xtra 1" },
    { name: "Bein Sport Xtra 2" },
  ];



  const handlesubmite = (e) => {
    e.preventDefault();

    const allform = {linkchaine:linkchaine, MatchId:channelid, ChannelName :channel}
    fetch('http://localhost:3001/AddChannelA',
       {
        method :'POST',
        headers: { 'Content-Type': 'application/json' },
        body : JSON.stringify(allform)
       }
    ).then((res)=>{
        alert("Done !")
        console.log(res.text())
      }
    ).catch((err)=>{( alert("Not Done !",err ))})
     
    
    
  //   authService.add(channel, channelid,linkchaine).then((res)=>{
     
  //     alert("Done")
  //     setSeccussful(true)
  // }).catch((error)=>{
  //   setSeccussful(true)
 
  //   alert("error")
  
  // })
  };
  const [islogin ,  setislogin] = useState(false)
  const logi = sessionStorage.getItem("login")
  useEffect(()=>{
    if(logi){
      setislogin(true)
    }
  })

  const {
    Data: matches,
    ispending,
    errormsg,
  } = useFetch("http://localhost:3001/");

  console.log(channelid);

  return (
<> 
    <Helmet>  
    <meta
          name="description"
        
          content="كورة لايف,koora live,مشاهدة مباريات اليوم بث مباشر,live koora,بدون تقطيع عبر موقع كوره لايف,koora live 96,اون لاين,kooralive,لنقل المباريات لايف,koora live tv,لايف كورة,kora live"
    
          data-rh="true"
        />
        <title>TawfikShoot - AddChannel</title>
        <link rel="canonical" href="/admin" />
    </Helmet>
    <div className="te">   {  islogin ?
    <div className="addchannel">
      <h1 className="title">Add Channels</h1>
      <form className="form" onSubmit={handlesubmite}>
        {/* <p style={{"color":"white"}}>{data.hometeam}  ::{data.match_id} </p>  */}
        <div className="infos">
          <div className="selectdiv">
            <Select
              variant="outlined"
              sx={{
                border: "1px solid fff",
                color: "#fff",
                "& .MuiSvgIcon-root": {
                  color: "white",
                },
              }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={channelid}
              label="Chooose channel"
              onChange={(e) => {
                setchannelid(e.target.value);
              }}
            >
              {matches &&
                matches.map((data) => (
                  <MenuItem  value={data.match_id}>
                  {data.hometeam}{" "}  <img className="img" src={data.team_home_badge} /> 
                    <span className="channelname"> VS </span> <img  className="img" src={data.team_away_badge} />{" "}
                    {data.awayTeam}
                  </MenuItem>
                ))}
            </Select>
          </div>
          <div className="inputdiv">      

            <Select
              variant="outlined"
              sx={{
                border: "1px solid fff",
                color: "#fff",
                "& .MuiSvgIcon-root": {
                  color: "white",
                },
              }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={channel}
              label="Chooose channel"
              onChange={(e) => {
                setchannel(e.target.value);
              }}
            >    
              
              {listChaine &&
                listChaine.map((data) => (
                  <MenuItem value={data.name}>
                    {" "}
                    <span className="channelname" > {data.name} </span>
                  </MenuItem>
                ))}
            </Select>
        

            <div className="linkchannel">
              
              <input className="input" type="text" value={linkchaine}  placeholder="Please entre Chaine"  onChange={(e)=>{setlinkchaine(e.target.value)}} />
              
               </div>

            <input className="submit" type="submit" value="Submit" />

         { ispending && <p>Channels Has been Added</p>}
          </div>
        </div>
      </form>
    </div>
    :  <div> <h1 style={{textAlign:"center" , color:"white"}}>Please LogIn</h1> </div>} </div>

</>
  );
};

export default AddChannels;
