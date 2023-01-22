import { Helmet } from 'react-helmet-async';
import './pageblog.css'
import useFetch from '../Hook/UseFetch';
import { useParams } from 'react-router-dom';




const Blogpage = () => {

    const {id} = useParams()
    const {title} = useParams()
    const {Data:blog} = useFetch(`http://localhost:3001/getContent/${id}`);

    return ( 
        <>

      <div className="all" >  <div className="blogpage"> <div className="titdiv">  
 
 <p className='tit'> {title} </p>  
  
      
        </div> 
        <div className='playderDiv'>
          <div className="header">
            <div className="tithead">
           {blog && blog.map((blog)=>(
       <div className='artic' dangerouslySetInnerHTML={{__html : blog.content}} />
        //    <p className='para'  /> 
        
           ))}
       

         
            </div>
             </div>
 
         
       
       
  
        

        </div>  </div >
        <div className='socialmedia'>

      

<div style={{backgroundColor :"#55acee"}} className="socialmediabtn">
 <a>
 تويتر
</a> 
</div>
<div style={{backgroundColor :"#3b5998"}} className="socialmediabtn">
 <a>
 فيسبوك
</a> 
</div>
<div  style={{backgroundColor :"#3ca2d9"}} className="socialmediabtn">
 <a>
 تيليجرام
</a> 
</div>


</div>

<div className='about'>
 <p className='paraaboutus'> 
 كورة لايف - tawfikshoot الرسمي مشاهدة مباريات اليوم بث مباشر موقع tawfikshoot الاصلي بدون توقف ولا تقطيع في البث المباشر علي الرابط الوحيد كورة لايف tawfikshoot.live الذى يوفر مشاهدة اهم مباريات اليوم بث مباشر بدون تقطيع على العديد من سيرفرات البث المباشر العربية والعالمية ومشاهدة المباريات في اي مكان بدون تقطيع في البث ولا توقف ويعمل على جميع سرعات النت ، موقع يلا شوت الجديد الرسمي tawfikshoot مشاهدة أهم مباريات اليوم بث مباشر جوال بدون تقطيع علي رابط كورة  لايف اون لاين ، لنقل المباريات المباشرة على العديد من سيرفرات البث المباشر ، لمشاهدة مباريات الدوريات الخمس الكبري ، ومشاهدة مباريات الدوريات العربية والبطولات العالمية والاوروبية في مكان واحده من خلال موقع يلا شوت الجديد الرسمي ، وسوف تتمكن على موقع كورة  لايف yallashoot.live من المشاهدة في اي مكان عبر الجوال بدون تقطيع ، مشاهدة المباريات على الكثير من جودادت البث المباشر يوتيوب وموقع تويتش ، من خلال نقل حصري خاص بموقع يلا شوت الجديد الرسمي الذى سوف يكون بشكل مجاني كامل للمشاهدة في اي وقت وبدون اعلانات مزعجه ، للتمكن من مشاهدة مباريات فريقك المفضل من ريال مدريد وبرشلونة في الدوري الاسباني ، ليفربول ومانشستر سيتي واليونايتد والمزيد من الفرق الاوروبية ، ومشاهدة مباريات الدوري المصري مع الاهلي والزمالك ، مشاهدة باقي الدوريات العربية ، وكذلك مشاهدة مباريات دوري ابطال اوروبا ، ودوري ابطال افريقيا وجميع البطولات من الدوري الاوروبي والبطولات العالمية من كاس العالم ، وكذلك كاس العالم للاندية ، وسوف يجعلك موقع كورة  لايف yalla shoot في قبل الاحداث اول باول بتحديث بشكل لحظي لنتائج المباريات ،
  كما يمكن الدخول لاي مباراة والمشاهدة على رابط سريع يعمل بدون توقف ويناسب جميع سرعات النت.
 </p>
      </div>

       
        </div>
        </>
        
     );
}
 
export default Blogpage;