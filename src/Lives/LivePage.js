import * as React from 'react';
import { useEffect ,useState , useRef} from 'react';

import { useParams } from 'react-router-dom';
import screenfull from 'screenfull';
import useFetch from '../Hook/UseFetch';
import './Livepage.css';

import ReactPlayer from 'react-player'
import playimg from '../svg/play.png'
import pauseimg from '../svg/pause.png'
import screen from '../svg/screen.png'
import m3u from '../svg/tvlist.m3u'
// import {ReactFlvPlayer} from 'react-flv-player'
import useWindowDimensions from "../Hook/useWindowDimensions";
import Player from '../Player';
import { Helmet } from 'react-helmet-async';
const Livepage = () => {
  const [hls , sethls] = useState()
  const [showopt , setShowopt] = useState(true);
  const {id} = useParams()
const{hometeam} = useParams()
const{awayteam} = useParams()
const {Data:channel} = useFetch(`http://localhost:3001/GetChannel/${id}/${hometeam}/${awayteam}`)
  

  

//     useEffect(()=>{
//         const src = {
//             hls: 'https://dmitwlvvll.cdn.mangomolo.com/dubaisportshd/smil:dubaisportshd.smil/chunklist_b1600000.m3u8'
//           };
//           var settings = {
//             timeout: 12000,
//             licenseKey: 'Kl8lYz0wN3o9NjJjczl2P3JvbTVkYXNpczMwZGIwQSVfKg==',
//             iframeMode: true,
//             iframeAllowed: true,
//             autoplay: false,
//             sharing: false,
//             skin: 's3',
//             src: src,
//             pip: false,
//             logoPosition: 'bottom',
//             logoWatermark: 'false',
//             mute: 'false',
//             isLive: true,
//             gaEvents: ['context', 'ready', 'playerstart', 'error', 'adimpression', 'adloadererror', 'aderror']
//         };
//           const elementID = 'rmp';
//           const rmp = new window.RadiantMP(elementID);

//           const rmpContainer = document.getElementById(elementID);
// rmpContainer.addEventListener('ready', () => {
//   console.log('player ready');
//   // Invoke API methods
//   console.log(rmp.getStreamType());
// });
// rmpContainer.addEventListener('playing', () => {
//   console.log('player has received playing event');
//   rmp.setBitrate(0);
// });
//           rmp.init(settings);
//     })
   const [play , setplay] = useState(false)
    const {width,heigth} = useWindowDimensions();


    let url = "https://video-weaver.mad01.hls.live-video.net/v1/playlist/CpsFOpWZU1FG6HLESy9Rx6f8qgO8In8iLOI6TfHsqy_eF6SInmY3zCRNwsSj5XZapgOPXCB0Yh3G18r_HwxZPpeFu-kuCF9ts2-pHkn7HnIDFng8LhAG0Cb91qcK0ZGxY-MRCj5qvwDvbqo0wMvtuRgajPmBKbgFYQvaCN4s-NOJ9DlheuHI_cOf99ktUApsFmBd0fH_43-BKeJ95HSvkS4RgTqprG4YbIjsRHy28dNHQI3nbHWNoLq47nV_7G0ex1CSqOz3HTf0T69ghir4rCLZEIYB4xJDmifqepB4PLecdZ9O3ITWtGzWitHI9skCUvusZmuTW95_wi-UJW_qIUk8juoSYSA7MZHF_OwuTvBhCKs-WU4wOqBn59fw4z19D-oqvMNLipFunql8r-adc2rAK573nJY12A-JQOownnKL8vwrPsKoxVC-IgJS-0PzCgsLCeWFIH7cSuPWgi-hi5wEucEo6MFcvJAohOulrilaNSjsKhH1kEMD3uwjVMkpSwhv5S2uea56ee8EobDIGCRaKTm2EhyNztAHvHGTQG0KznhYffH91177JJAStJw1S8i9x9jDuux-GU9H_r7IU3W406VxD0psJP2llEHiymRb7WvFJ91rHR-UYV_3OT6Mhxt1-AHq4jcn0eqBHdlxOMkvVfPSj7-ascpIeqlRdpx1KJRkBD3xCH5ToeHp8ms_jNKZ_qn5F54aZwMu_3y5o8LrPZnVgaliRiyAFCyp37wNCekwFo9jy3j4yYKbyVo1zHfVW30XMNYQuF4v0TqRjFgO7eAHzmhD43mNQm-kJTpFnUitnsr4zJL7bC-WtDu5r6cKMpNC-QHqVvfrWV2vf87D3DBvLKfs4V1fP7DP2_9FxHS-ldQs9Pz2-eDF8xoM8pggg4LSSOWOVkq1IAEqCWV1LXdlc3QtMjDDBQ.m3u8"
    // let url2 ='https://dmitwlvvll.cdn.mangomolo.com/dubaisportshd/smil:dubaisportshd.smil/chunklist_b1600000.m3u8'
    const pla = useRef(null)

    const handlefullscreen = ()=>{
      if(screenfull.isEnabled){
        screenfull.request(pla.current.wrapper)
      }
            
    }



    
    useEffect(()=>{
      if(width <= 600){
          setShowopt(false)
      }else{
          setShowopt(true)
      }    
     
    })

                                 


    return (  
      <>
<Helmet>  
<meta
      name="description"
    
      content="كورة لايف,koora live,مشاهدة مباريات اليوم بث مباشر,live koora,بدون تقطيع عبر موقع كوره لايف,koora live 96,اون لاين,kooralive,لنقل المباريات لايف,koora live tv,لايف كورة,kora live"

      data-rh="true"
    />
    <title>TawfikShoot - LIVE</title>
    <link rel="canonical" href="/live" />
</Helmet>

      <div className="all" >  <div className="livepage"> <div className="titdiv">   <p className='tit'>{hometeam} ضد {awayteam} بث مباشر مباراة  </p>  
      {channel&&channel.map((data)=>( 
        <h1 className='tit'>{data.ChannelName}</h1>      
           ))}    </div> 
        <div className='playerDiv'>
          <div className="header">
            <div className="tithead">
            <h2 className='r'  style={{textAlign:'right'}}>بث مباشر اون تايم سبورت 1 كورة لايف</h2>
            <p className='para'>وهذا من خلال أي جهاز ، حتى عبر الهاتف المحمول. يوفر لك هذا الموقع ثلاثة خيارات للجودة لكل لعبة ، ومن خلال الروابط المباشرة ، ستتمكن من مشاهدة أي لعبة في أي وقت وفي أي مكان ، حتى من خلال هاتفك المحمول وحزمة الإنترنت عبر الهاتف المحمول ، حتى لو كانت سرعة الإنترنت لديك منخفضة ، فلا يزال بإمكانك كونك متصلاً بالإنترنت ومشاهدة اللعبة دون انقطاع ، ولأن هذا الموقع لا يحتوي على إعلانات مزعجة ، فنحن نضمن لك المشاهدة عبر الإنترنت ، مليئة بالمرح ، والبطولات الأفريقية ، ودوري أبطال أوروبا ، وكأس أوروبا ، وحتى كأس العالم ، وأي لعبة تقام في أي مكان في العالم ، في جميع أنحاء العالم ، يمكن الوصول إليه بسهولة من خلال أي جهاز وأي سرعة إنترنت ، دون أي إزعاج ، سواء كان ذلك من خلال التشغيل المتقطع أو الإعلانات المزعجة ، واحتمالية انقطاع التشغيل معدومة. كل ما تحتاجه هو الذهاب مباشرة إلى الموقع وستجد كل ما تريده في عالم الرياضة ، سواء كانت أخبارًا أو مشاهدة المباريات ، وكذلك قنوات OnTime Sport 1 الحية من جميع الأطراف بتقنية Full HD. شاهد قناة OnTime Sport 1 يلا شوت.&nbsp;</p>
            <h4 className='r'  style={{textAlign:'right'}}>on time sports 1 بث مباشر بدون تقطيع</h4>
            <p  className='para'>بث مباشر عالي الجودة ، لا داعي لقطع ON Time Sports 1 hd Live على اليوتيوب ، لا حاجة لقطع وخوادم متعددة الجودة لمشاهدة قنوات On Time Sport 1 HD ، Kora Star On Time Live مباشرة عبر الإنترنت مع العديد من يوتيوب و بث مباشر بجودة مختلفة ، لا داعي للقطع ، شاهد قناة OnTime 1. من خلال شبكة OnTime Sport ، ستتمكن من مشاهدة أي لعبة.إذا كان لديك معلق مفضل أو ترغب في مشاهدة مباراة مع أحد المعلقين بين حفيظ الدراجي أو رؤوف خليف أو حتى عصام الشوالي ، هذه ميزة أخرى يوفرها هذا الموقع لأنها تتيح لك مشاهدة اللعبة ، وهناك عدة خيارات للمعلقين لاختيار الخيار الذي يناسبك ، وخيارات جودة متعددة وخيارات متعددة للمعلقين. .&nbsp;</p>
            </div>
             </div>
 
           <div className='btndiv'>
            <div className="btn">
             <a>
              1080px
            </a> 
            </div>
            <div className="btn">
             <a>
              720px
            </a> 
            </div>
            <div className="btn">
             <a>
              480px
            </a> 
            </div>
           
           </div>

           <div  className="player"> 

           <ReactPlayer ref={pla}  width={"100%"} height={"100%"}  playing={play} url={url} />
           
           <div className="buttons">
             <img onClick={()=>{ play == true ? setplay(false) : setplay(true)}} className='playimg' src={ play ? pauseimg :  playimg} />
             <img className='imgscreen' onClick={handlefullscreen} src={screen} />
             {/* <img className='playimg' src={playimg} />
             <img className='playimg' src={playimg} /> */}
           </div>
           
           </div>
          
   
  <div className="header">
            <div className="tithead">
            <h2 className='r'  style={{textAlign:'right'}}>بث مباشر اون تايم سبورت 1 كورة لايف</h2>
            <p className='para'>وهذا من خلال أي جهاز ، حتى عبر الهاتف المحمول. يوفر لك هذا الموقع ثلاثة خيارات للجودة لكل لعبة ، ومن خلال الروابط المباشرة ، ستتمكن من مشاهدة أي لعبة في أي وقت وفي أي مكان ، حتى من خلال هاتفك المحمول وحزمة الإنترنت عبر الهاتف المحمول ، حتى لو كانت سرعة الإنترنت لديك منخفضة ، فلا يزال بإمكانك كونك متصلاً بالإنترنت ومشاهدة اللعبة دون انقطاع ، ولأن هذا الموقع لا يحتوي على إعلانات مزعجة ، فنحن نضمن لك المشاهدة عبر الإنترنت ، مليئة بالمرح ، والبطولات الأفريقية ، ودوري أبطال أوروبا ، وكأس أوروبا ، وحتى كأس العالم ، وأي لعبة تقام في أي مكان في العالم ، في جميع أنحاء العالم ، يمكن الوصول إليه بسهولة من خلال أي جهاز وأي سرعة إنترنت ، دون أي إزعاج ، سواء كان ذلك من خلال التشغيل المتقطع أو الإعلانات المزعجة ، واحتمالية انقطاع التشغيل معدومة. كل ما تحتاجه هو الذهاب مباشرة إلى الموقع وستجد كل ما تريده في عالم الرياضة ، سواء كانت أخبارًا أو مشاهدة المباريات وكذلك قنوات OnTime Sport 1 الحية من جميع الأطراف بتقنية Full HD. شاهد قناة OnTime Sport 1 يلا شوت.&nbsp;</p>
            
            </div>

            {showopt ? 
             <div className='btndivfooter'>
             <div className="btnfooter">
              <a className='afooter'>
               #beinSport 1 max
             </a> 
             </div>
             <div className="btnfooter">
              <a className='afooter'>
              #beinSport 2 max
             </a> 
             </div>
             <div className="btnfooter">
              <a className='afooter'>
                #beinSport 3 max
             </a> 
             </div>
             <div className="btnfooter">
              <a className='afooter'>
              #beinSport 4 max
             </a> 
             </div>
             <div className="btnfooter">
              <a className='afooter'>
              #beinSport 5 max
             </a> 
             </div>
             <div className="btnfooter">
             <a className='afooter'>
              #beinSport 6 max
             </a> 
             </div>
            
            </div> :
             <div className='btndivfooter'>
             <div  className="btnfootermb">
              <a className='afooter'>
               #beinSport 1 max
             </a> 
             </div>
             <div className="btnfootermb">
              <a className='afooter'>
              #beinSport 2 max
             </a> 
             </div>
             <div className="btnfootermb">
              <a className='afooter'>
                #beinSport 3 max
             </a> 
             </div>
            
            
            </div>
 
 
          }     
           

             </div>
        

        </div>  </div ></div>
        </>
    );
}
 
export default Livepage;







