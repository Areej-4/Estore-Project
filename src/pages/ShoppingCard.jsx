import { useDispatch, useSelector } from "react-redux"
import { AiOutlineDelete } from "react-icons/ai";

import Layout from "../components/Layout"
import { addcart, clear, removecart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const ShoppingCard = () => {
    const data=useSelector((state)=>state.cartReducer.carts)
    const dispatch=useDispatch();
    const add=(x)=>{
        dispatch(addcart(x))
      }
      const remove=(x)=>{
        dispatch(removecart(x))
      }
      const Clear=(x)=>{
        dispatch(clear(x))
      }
  return (
   <Layout>
   <div className="container mx-auto align-items-center text-center p-4">
 <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
          <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
            <tr>
              <th scope="col" className="px-6 py-4">PRODUCT</th>
              <th scope="col" className="px-6 py-4">TITLE</th>
              <th scope="col" className="px-6 py-4">PRICE</th>
              <th scope="col" className="px-6 py-4">Qty</th>
              <th scope="col" className="px-6 py-4">Total Price</th>
              <th scope="col" className="px-6 py-4">Remove Item</th>
            </tr>
          </thead>
          <tbody>
           {data.map((x)=>{
            return(
              <tr className="border-b border-neutral-200 dark:border-white/10" key={x.id}>
              <td className="whitespace-nowrap px-6 py-4 font-medium"><img src={x.thumbnail} alt="gfd" className="img-fluid w-64 cursor-pointer"/> </td>
              <td className="whitespace-nowrap px-6 py-4 cursor-pointer">{x.title}</td>
              <td className="whitespace-nowrap px-6 py-4 cursor-pointer">{x.price}</td>
              <td className="whitespace-nowrap px-6 py-4"><button onClick={()=>remove(x)} className="bg-slate-500 p-3 rounded mx-5 text-white">-</button>{x.qty}<button onClick={()=>add(x)} className="bg-slate-500 p-3 rounded mx-5 text-white">+</button></td>
              <td className="whitespace-nowrap px-6 py-4 cursor-pointer">{x.qty*x.price}</td>
              <td className="whitespace-nowrap px-6 py-4"><AiOutlineDelete className="text-slate-600 text-3xl cursor-pointer" onClick={()=>Clear(x)}/></td>
              
            </tr>
            )
           })}
          </tbody>
         <Link to="/category"> 
         <button className='h-10 w-1/3 text-white my-8 text-xl rounded-md font-semibold bg-slate-800'>Go Back</button>
         </Link>
        </table>
      </div>
    </div>
  </div>
</div>

 </div>
   </Layout>
  )
}

export default ShoppingCard
