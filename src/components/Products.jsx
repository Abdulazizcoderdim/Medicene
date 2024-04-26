import { ShoppingCart } from 'lucide-react';

const data =[
  {
    img: "../../public/Cart.png",
    title: "Sensitivity Relief Vanilla & Peppermint Natural Mouthwash",
    newPrice: 100,
    oldPrice: 150,
  },
  {
    img: "../../public/Cart.png",
    title: "Sensitivity Relief Vanilla & Peppermint Natural Mouthwash",
    newPrice: 100,
    oldPrice: 150,
  },
  {
    img: "../../public/Cart.png",
    title: "Sensitivity Relief Vanilla & Peppermint Natural Mouthwash",
    newPrice: 100,
    oldPrice: 150,
  },
  {
    img: "../../public/Cart.png",
    title: "Sensitivity Relief Vanilla & Peppermint Natural Mouthwash",
    newPrice: 100,
    oldPrice: 150,
  },
]


const Products = ({addItem}) => {
  return (
    <div className="bg-white flex flex-col gap-16 border overflow-hidden">
      <div className="lg:container px-5 flex flex-col ">
        <div className="flex flex-col gap-5 items-center justify-center">
          <h1 className="text-5xl font-medium">Trending Products</h1>
          <p className="text-lg font-medium text-gray-800">
            Top Picks for Sustalnable Dental Care
          </p>
        </div>
      </div>

      <div className="md:flex lg:flex-nowrap justify-center flex-wrap overflow-auto gap-5 lg:container px-5">
          {data.map((item,index) => (
            <div className="flex p-5 sm:w-1/2 md:w-1/4 md:mt-0 mt-5 w-full flex-col gap-10 border border-gray-400 rounded-lg" key={index}>
               <img className='object-cover' src={item.img} alt="" />
               <div className="flex flex-col gap-5">
                 <p className='font-bold text-xl'>{item.title}</p>
                  <div className="flex gap-1 items-baseline">
                    <span className="font-bold text-xl">${item.newPrice}</span>
                    <span className="font-medium text-gray-500">${item.oldPrice}</span>
                  </div>
                  <button onClick={addItem} className='flex items-center justify-center w-full text-white font-bold border-0 outline-none rounded-lg py-3 bg-gray-800 hover:bg-gray-900 active:bg-gray-950'><ShoppingCart/> Add to Cart</button>
               </div> 
            </div>
          ))}
        </div>
    </div>
  );
};

export default Products;
