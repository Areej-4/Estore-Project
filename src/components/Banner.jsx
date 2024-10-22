const Banner = () => {
  return (
    <div className=" container mx-auto bg-[#DDDDDD] rounded-lg">
    <div className="px-24 py-20 mx-auto flex flex-wrap items-center">
      <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 text-center">
        <h1 className="title-font font-medium text-5xl text-gray-900">BEST OFFER-UPTO 50%</h1>
        <p className="leading-relaxed mt-4">Explore our latest New Arrivals & unlock discounts of up to 50% off!</p>
       <div className="flex justify-center flex-wrap gap-5 mt-5"> 
       <div className="bg-white h-20 w-20 rounded text-2xl"> 00 Days </div>
       <div className="bg-white h-20 w-20 rounded text-2xl"> 00 Hours </div>
       <div className="bg-white h-20 w-20 rounded text-2xl"> 00 Mins </div>
       <div className="bg-white h-20 w-20 rounded text-2xl"> 00 Secnds </div>
       </div>
       <button className='h-10 w-48 bg-[#1679AB] text-white my-8 text-xl rounded-md font-semibold hover:bg-slate-800'>Shop Now</button>
      </div>
      <div className="lg:w-2/6 md:w-1/2 mx-auto flex flex-col md:ml-auto w-full mt-10 md:mt-0">
       <img src="/images/banner1.webp" alt="image"/>
      </div>
    </div>
        </div>
  )
}

export default Banner
