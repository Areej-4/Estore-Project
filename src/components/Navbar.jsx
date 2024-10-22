import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { CgFacebook } from "react-icons/cg";
import { RxInstagramLogo } from "react-icons/rx";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
const Navbar = () => {
  const data=useSelector((state)=>state.cartReducer.carts)
  return (
    <div className="sticky top-0 z-50 ">
    <div className="bg-black min-h-8 text-white flex m-auto">
   <div className=" flex ms-40 text-center m-auto"> <MdOutlineEmail className=" m-auto mr-2" />estorepakistanofficial@gmail.com</div>
  <Link target="_blank" to="https://maps.app.goo.gl/mSuZYFMiee4miDzH8"><div className=" flex  text-center"> <IoLocationOutline className="flex m-auto mr-2"/><h3 className="hover:text-indigo-800 m-auto cursor-pointer">Shop Address</h3></div></Link>
      <div className=" flex text-center m-auto cursor-pointer"><Link target="_blank" to="https://www.facebook.com/estorepakistanofficial/"><CgFacebook className="flex text-xl mx-2 hover:text-indigo-800 cursor-pointer"/></Link><Link target="_blank" to="https://www.instagram.com/estorepakistanofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><RxInstagramLogo className="flex my-1 text-l hover:text-indigo-800 cursor-pointer"/></Link></div>
    </div>
 <header className="text-black font-semibold bg-[#F9F9F9]">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
     <img src="/images/logo.avif" alt="img" className="mx-auto"/>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center ">
      <Link to="/" className="mr-5 hover:text-indigo-900  text-xl cursor-pointer">Home</Link>
      <Link to="/contact" className="mr-5 hover:text-indigo-900  text-xl cursor-pointer">Contact Us</Link>
      <Link to="/category" className="mr-5 hover:text-indigo-900  text-xl cursor-pointer">Categories</Link>
    </nav>
    <div className="flex m-auto ">
    <IoSearch className=" text-2xl  text-gray-700 cursor-pointer mx-2 hover:text-indigo-800"/>
    <Link to="/register"><FaRegUser className=" m-auto text-gray-700 text-xl cursor-pointer mx-2 hover:text-indigo-800"/></Link>
   <Link to="/shopping">
   <Badge color="info" badgeContent={data.length} showZero>
   <HiOutlineShoppingCart className=" m-auto text-gray-700 text-2xl cursor-pointer mx-2 hover:text-indigo-800"/>
   </Badge>
   </Link>
  
    </div>
  </div>
</header>

    </div>
  )
}

export default Navbar
