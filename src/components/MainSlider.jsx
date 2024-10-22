
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
const MainSlider = () => (

 <Carousel autoplay style={{height:650}} >
 <div className='text-center my-5 bg-[#EAD8C0] mx-auto flex flex-wrap border-none'>
   <img src='/images/hero1.webp' className='text-center mx-auto my-4 rounded-md' alt='img'/><Link to="/category"><button className='min-h-8 w-40 bg-white text-black my-5 rounded-md font-semibold hover:bg-slate-400 '>Shop Now</button></Link>
 </div>
 <div className='my-5 bg-[#B3C8CF] mx-auto flex flex-wrap text-center'>
 <img src='/images/hero2.webp' className='text-center mx-auto my-4 rounded-md' alt='img'/>
 <Link to="/category">
 <button className='min-h-8 bg-white text-black my-5 w-40 rounded-md font-semibold hover:bg-slate-400'>Shop Now</button>
 </Link>
 </div>
</Carousel>

);
export default MainSlider