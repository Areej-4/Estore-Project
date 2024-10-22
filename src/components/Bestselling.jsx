import { Link } from "react-router-dom";
import { product } from "../data/data";
import { data } from "../data/data1";
import { newdata } from "../data/data2";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Banner from "./Banner";

const Bestselling = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,

    },
    laptop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
    }
  };
  return (
    <div>
      <header className="text-black font-semibold">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <h1 className="font-extrabold text-3xl">BEST SELLING</h1>
          <div className="flex m-auto text-black font-semibold text-xl mr-5 cursor-pointer">
            <h1 className="mr-5 text-indigo-800">Google</h1>
            <h1 className="mr-5">Apple</h1>
            <h1 className="mr-5">OnePlus</h1>
          </div>
        </div>
      </header>

      
     <div>
     <Carousel responsive={responsive}>
     {product.products.map((x) => {
       return (
         <div key={x.id}>
           <Link to={`/bestselling/${x.id}`}>
         <div className="px-20 py-16 container text-center transform rounded-xl transition duration-300 hover:scale-105">
<img className="block relative overflow-hidden cursor-pointer rounded-lg  mt-20" src={x.thumbnail} alt="content" />
<h3 className="text-gray-700 title-font text-lg font-medium mb-1">{x.title}</h3>
<h2 className="text-gray-600 title-font text-sm font-medium">{x.brand}</h2>
<p className="mt-1">Rs.{x.price}</p>
</div>

           </Link>
         </div>
       );
     })}
     </Carousel>;
     </div>

<Banner/>

      <div className="mt-20 font-extrabold text-4xl text-center">
        <h1>Featured Collection</h1>
      </div>
        <div>
        <Carousel responsive={responsive}>
            {data.datas.map((x) => {
              return (
                <div
                  key={x.id}
                >
                  <Link to={`/bestselling/${x.id}`}>
                    <div className="px-20 py-16 container text-center transform rounded-xl transition duration-300 hover:scale-105">
                      <img
                        alt="ecommerce"
                        className="block relative overflow-hidden cursor-pointer rounded-lg mt-20"
                        src={x.thumbnail}
                      />
                      <div>
                        <h3 className="text-gray-700 title-font text-lg font-medium mb-1">
                          {x.title}
                        </h3>
                        <h2 className="text-gray-600 title-font text-sm font-medium">
                          {x.brand}
                        </h2>
                        <p className="mt-1">Rs.{x.price}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
            </Carousel>;
        </div>
      <div className="font-extrabold text-4xl text-center">
        <h1>New Arrival</h1>
      </div>
     
        <div>
        <Carousel responsive={responsive}>
            {newdata.new.map((x) => {
              return (
                <div
                  key={x.id}
                >
                  <Link to={`/bestselling/${x.id}`}>
                    <div className="px-20 py-16 container text-center transform rounded-xl transition duration-300 hover:scale-105">
                      <img
                        alt="ecommerce"
                        className="block relative overflow-hidden cursor-pointer rounded-lg mt-20"
                        src={x.thumbnail}
                      />
                      <div>
                        <h3 className="text-gray-700 title-font text-lg font-medium mb-1">
                          {x.title}
                        </h3>
                        <h2 className="text-gray-600 title-font text-sm font-medium">
                          {x.brand}
                        </h2>
                        <p className="mt-1">Rs.{x.price}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
            </Carousel>;
        </div>
      <div className="bg-[#DDDDDD] text-4xl  h-20 text-gray-900 my-8">
        <marquee>
          <ul className="my-4 list-disc mx-auto flex gap-x-24">
            <li>100% Payment Secure</li>
            <li>Online Support</li>
            <li>No restoking fee</li>
            <li>No final sale items</li>
            <li>Returns accepted for 30 days</li>
            <li>100% Payment Secure</li>
            <li>Online Support</li>
          </ul>
        </marquee>
      </div>
      <div className=" text-center pt-7 mb-10 mt-10">
        <h1 className="text-4xl  font-semibold mb-2">Follow us on Instagram</h1>
        <Link
          target="_blank"
          to="https://www.instagram.com/estorepakistanofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        >
          <p className="text-xl cursor-pointer hover:text-sky-700">
            @estorepakistanofficial
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Bestselling;
