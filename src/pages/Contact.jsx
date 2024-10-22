import { MdMessage } from "react-icons/md"
import Layout from "../components/Layout"
import { useState } from "react"
import { toast } from "react-toastify";
const Contact = () => {
  const initialFormData = {
    name:'',
    email:'',
    phone:'',
    subject:'',
    message:''
  };

  const [formdata,setFormdata]=useState(initialFormData);

  const Submit=(e)=>{
    e.preventDefault();
    console.log(formdata);
    toast.info("Your Message has been sent Successfully!")
    setFormdata(initialFormData);
  }
  return (
   <Layout>
   <div className="bg-[#DDDDDD] h-20 text-center">
   <h1 className=" text-4xl font-semibold py-3">Contact</h1>
   </div>
  <section className=" body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/3">
        <div className="h-20 w-72 bg-opacity-75 pt-16 pb-24 rounded-lg overflow-hidden text-center mx-auto relative border border-solid border-slate-400 transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 cursor-pointer">
          <h1 className="tracking-widest text-xl title-font font-bold my-auto">Email Address</h1>
          <p className="title-font  font-medium text-gray-700 mb-3">info@estorepakistan.com</p>
        
        </div>
      </div>
      <div className="p-4 lg:w-1/3">
        <div className="h-20 w-72 bg-opacity-75 pt-16 pb-24 rounded-lg overflow-hidden text-center relative mx-auto border border-solid border-slate-400 transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 cursor-pointer">
          <h1 className="tracking-widest text-xl title-font font-bold my-auto">Phone Number</h1>
          <p className="title-font font-medium text-gray-700 mb-3">+92 314 3540313</p>
        </div>
      </div>
      <div className="p-4 lg:w-1/3">
        <div className="h-28 w-72 bg-opacity-75 pt-14 pb-32 rounded-lg overflow-hidden text-center mx-auto relative border border-solid border-slate-400 transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 cursor-pointer">
          <h1 className="tracking-widest text-xl title-font font-bold my-auto">Office Address</h1>
          <p className="title-font font-medium text-gray-700 mb-3">Suit# 338, 3rd Floor, Star City Mall, Abdullah Haroon Road, , Karachi, Pakistan</p>
        </div>
      </div>
    </div>
  </div>
</section>
<div className="container px-5 py-24 mx-auto bg-[#DDDDDD] rounded-md my-10 w-11/12">
<div className="flex"><h1 className="text-3xl font-medium mb-6 ml-5">Send Message</h1>{<MdMessage fontSize="25px" className="m-2 mt-3" />}</div>
<div className="lg:w-1/2 md:w-2/3 mx-auto ">
  <form onSubmit={Submit}>
    <div className="flex flex-wrap -m-2">
      <div className="p-4 w-1/2">
        <div className="relative">
          <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name </label>
          <input type="text" id="name" value={formdata.name} name="name" placeholder="Enter your full name" required onChange={(e)=>setFormdata({...formdata,name:e.target.value})} className="w-full bg-opacity-50 rounded border border-gray-400  focus:bg-white focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
      </div>
      <div className="p-4 w-1/2">
      <div className="relative">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email </label>
        <input type="email" id="email" value={formdata.email} name="email" placeholder="Enter Email Address" required onChange={(e)=>setFormdata({...formdata,email:e.target.value})} className="w-full bg-opacity-50 rounded border border-gray-400  focus:bg-white focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
    </div>
    <div className="p-4 w-1/2">
    <div className="relative">
      <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone </label>
      <input type="text" id="phone" value={formdata.phone} name="phone" placeholder="Enter your phone Number" required onChange={(e)=>setFormdata({...formdata,phone:e.target.value})} className="w-full bg-opacity-50 rounded border border-gray-400  focus:bg-white focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
    </div>
  </div>
  <div className="p-4 w-1/2">
  <div className="relative">
    <label htmlFor="subject" className="leading-7 text-sm text-gray-600">Subject </label>
    <input type="text" id="subject" value={formdata.subject} name="subject" placeholder="Enter your full name" required onChange={(e)=>setFormdata({...formdata,subject:e.target.value})} className="w-full bg-opacity-50 rounded border border-gray-400  focus:bg-white focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
  </div>
</div> <div className="p-4 w-full">
     <div className="relative">
       <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
       <textarea id="message" value={formdata.message} name="message" placeholder="Enter Message" onChange={(e)=>setFormdata({...formdata,message:e.target.value})} className="w-full  bg-opacity-50 rounded border border-gray-400 focus:bg-white focus:ring-2 focus:ring-gray-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
     </div>
   </div>
   <div className="p-8 w-full">
     <button className="flex mx-auto text-white bg-slate-500 border-0 py-2 px-8 focus:outline-none hover:bg-slate-700 rounded text-lg">Submit</button>
   </div>
 </div>
   </form>
  </div>
</div>
<div className="mx-auto pb-20">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.9887843405822!2d67.02326267414124!3d24.864232645108927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f74d6070565%3A0xd32f0c920a5e3e2d!2seStore%20Pakistan!5e0!3m2!1sen!2s!4v1706099487075!5m2!1sen!2s" className="w-11/12 h-96 mx-auto mb-4 rounded-md"></iframe>
</div>
   </Layout>
  )
}

export default Contact