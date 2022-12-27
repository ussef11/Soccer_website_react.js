import * as React from 'react';
import { useEffect ,useState} from 'react';

import { useParams } from 'react-router-dom';
import screenfull from 'screenfull';
import useFetch from '../Hook/UseFetch';
import './Livepage.css';
import m3u from '../svg/tvlist.m3u'
import {ReactFlvPlayer} from 'react-flv-player'
import useWindowDimensions from "../Hook/useWindowDimensions";

const Livepage = () => {
  const [hls , sethls] = useState()
  const [showopt , setShowopt] = useState(true);
  const {id} = useParams()
const{hometeam} = useParams()
const{awayteam} = useParams()
const {Data:channel} = useFetch(`https://soccer-data.vercel.app/GetChannel/${id}/${hometeam}/${awayteam}`)
  

  

    useEffect(()=>{
        const src = {
            hls: 'https://dmitwlvvll.cdn.mangomolo.com/dubaisportshd/smil:dubaisportshd.smil/chunklist_b1600000.m3u8'
          };
          var settings = {
            timeout: 12000,
            licenseKey: 'Kl8lYz0wN3o9NjJjczl2P3JvbTVkYXNpczMwZGIwQSVfKg==',
            iframeMode: true,
            iframeAllowed: true,
            autoplay: false,
            sharing: false,
            skin: 's3',
            src: src,
            pip: false,
            logoPosition: 'bottom',
            logoWatermark: 'false',
            mute: 'false',
            isLive: true,
            gaEvents: ['context', 'ready', 'playerstart', 'error', 'adimpression', 'adloadererror', 'aderror']
        };
          const elementID = 'rmp';
          const rmp = new window.RadiantMP(elementID);
          rmp.init(settings);
    })
   
    const {width,heigth} = useWindowDimensions();
    
    useEffect(()=>{
      if(width <= 600){
          setShowopt(false)
      }else{
          setShowopt(true)
      }    
     
    })

                                 


    return (  
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

      <div id="rmp"></div>
    
    {/* <ReactFlvPlayer
    url = "https://pull-f5-va01.tiktokcdn.com/game/stream-2994397616979050584_or4.flv">

    </ReactFlvPlayer> */}
  <div className="header">
            <div className="tithead">
            <h2 className='r'  style={{textAlign:'right'}}>بث مباشر اون تايم سبورت 1 كورة لايف</h2>
            <p className='para'>وهذا من خلال أي جهاز ، حتى عبر الهاتف المحمول. يوفر لك هذا الموقع ثلاثة خيارات للجودة لكل لعبة ، ومن خلال الروابط المباشرة ، ستتمكن من مشاهدة أي لعبة في أي وقت وفي أي مكان ، حتى من خلال هاتفك المحمول وحزمة الإنترنت عبر الهاتف المحمول ، حتى لو كانت سرعة الإنترنت لديك منخفضة ، فلا يزال بإمكانك كونك متصلاً بالإنترنت ومشاهدة اللعبة دون انقطاع ، ولأن هذا الموقع لا يحتوي على إعلانات مزعجة ، فنحن نضمن لك المشاهدة عبر الإنترنت ، مليئة بالمرح ، والبطولات الأفريقية ، ودوري أبطال أوروبا ، وكأس أوروبا ، وحتى كأس العالم ، وأي لعبة تقام في أي مكان في العالم ، في جميع أنحاء العالم ، يمكن الوصول إليه بسهولة من خلال أي جهاز وأي سرعة إنترنت ، دون أي إزعاج ، سواء كان ذلك من خلال التشغيل المتقطع أو الإعلانات المزعجة ، واحتمالية انقطاع التشغيل معدومة. كل ما تحتاجه هو الذهاب مباشرة إلى الموقع وستجد كل ما تريده في عالم الرياضة ، سواء كانت أخبارًا أو مشاهدة المباريات ، وكذلك قنوات OnTime Sport 1 الحية من جميع الأطراف بتقنية Full HD. شاهد قناة OnTime Sport 1 يلا شوت.&nbsp;</p>
            
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
    );
}
 
export default Livepage;







