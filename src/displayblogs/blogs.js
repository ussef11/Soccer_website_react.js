
import './blogs.css'
import useFetch from '../Hook/UseFetch';
import { Link } from "react-router-dom";

const Blogs = () => {

    const {
        Data: blogs,
        ispending,
        errormsg,
      } = useFetch("https://soccer-data.vercel.app/getarticles");
    return ( 
        <div className='blg'>
        <div className='headblogs'>

            <div className='titlehead'>
                <h2 className='h2'>اخبار كورة</h2>
            </div>

        </div>

         <div className="blogs">
            { blogs && blogs.map((blog)=>( 
  <Link to={`Blogpage/${blog.id_articles}/${blog.title}`}> <div className="blog">
  <div className="divimg"> 
  <img className='bolgimg' src={blog.articleimg} />
  </div>

  <div className='title'>
      <p className='ptitle'>{blog.title} </p>
  </div>
</div>
</Link> 

))}
             

         </div>
         <div className='headblogs'>

<div className='titlehead'>
<h2 className='h2'>كورة لايف - Tawfikshoot اهم مباريات اليوم</h2> 
</div>

</div>
      <div className='aboutus'>
 <p className='paraaboutus'> 
 كورة لايف - tawfikshoot الرسمي مشاهدة مباريات اليوم بث مباشر موقع tawfikshoot الاصلي بدون توقف ولا تقطيع في البث المباشر علي الرابط الوحيد كورة لايف tawfikshoot.live الذى يوفر مشاهدة اهم مباريات اليوم بث مباشر بدون تقطيع على العديد من سيرفرات البث المباشر العربية والعالمية ومشاهدة المباريات في اي مكان بدون تقطيع في البث ولا توقف ويعمل على جميع سرعات النت ، موقع يلا شوت الجديد الرسمي tawfikshoot مشاهدة أهم مباريات اليوم بث مباشر جوال بدون تقطيع علي رابط كورة  لايف اون لاين ، لنقل المباريات المباشرة على العديد من سيرفرات البث المباشر ، لمشاهدة مباريات الدوريات الخمس الكبري ، ومشاهدة مباريات الدوريات العربية والبطولات العالمية والاوروبية في مكان واحده من خلال موقع يلا شوت الجديد الرسمي ، وسوف تتمكن على موقع كورة  لايف yallashoot.live من المشاهدة في اي مكان عبر الجوال بدون تقطيع ، مشاهدة المباريات على الكثير من جودادت البث المباشر يوتيوب وموقع تويتش ، من خلال نقل حصري خاص بموقع يلا شوت الجديد الرسمي الذى سوف يكون بشكل مجاني كامل للمشاهدة في اي وقت وبدون اعلانات مزعجه ، للتمكن من مشاهدة مباريات فريقك المفضل من ريال مدريد وبرشلونة في الدوري الاسباني ، ليفربول ومانشستر سيتي واليونايتد والمزيد من الفرق الاوروبية ، ومشاهدة مباريات الدوري المصري مع الاهلي والزمالك ، مشاهدة باقي الدوريات العربية ، وكذلك مشاهدة مباريات دوري ابطال اوروبا ، ودوري ابطال افريقيا وجميع البطولات من الدوري الاوروبي والبطولات العالمية من كاس العالم ، وكذلك كاس العالم للاندية ، وسوف يجعلك موقع كورة  لايف yalla shoot في قبل الاحداث اول باول بتحديث بشكل لحظي لنتائج المباريات ،
  كما يمكن الدخول لاي مباراة والمشاهدة على رابط سريع يعمل بدون توقف ويناسب جميع سرعات النت.
 </p>
      </div>

        </div>
     );
}
 
export default Blogs;
