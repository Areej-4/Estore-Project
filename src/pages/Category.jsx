import { Link } from "react-router-dom"
import Layout from "../components/Layout"
import { item } from "../data/data3"

const Category = () => {
  return (
    <Layout>
    <div className="bg-[#DDDDDD] h-20 text-center">
   <h1 className=" text-4xl font-semibold py-3">Collections</h1>
   </div>
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4 mx-auto">
      {item.items.map((x)=>{
        return(
          <div className="lg:w-1/4 md:w-1/2 p-12 w-full text-center" key={x.id}>
         <Link to={`/category/${x.id}`}>
         <div className="block relative h-50 rounded overflow-hidden cursor-pointer ">
         <img alt="ecommerce" className="object-cover object-center w-full h-full block rounded-lg" src={x.thumbnail} />
        <div>
 <h3 className="text-gray-900 title-font text-lg font-medium my-4">{x.title}</h3>
 <p className="text-gray-700 title-font text-lg font-medium">{x.category}</p>
</div>
       </div>
         </Link>
        </div>
        )
      })}
      </div>
    </div>
  </section>
    </Layout>
  )
}

export default Category
