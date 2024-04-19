
const Page1 = () => {
  return (
    <div className="bg-white mb-36">
        <div className="lg:container px-5 flex flex-wrap items-center justify-center gap-5">
           <div className="md:w-1/3 w-full bg-green-600 px-5 py-10 rounded-xl items-center">
              <div className="flex flex-col gap-3">
                 <h1 className="text-white text-5xl  font-semibold">Mouth Wash</h1>
                 <p className="text-white font-medium">your go-to choice for a naturally <br />clean and eco-friendly smile</p>
                 <button className="border-0 transition duration-300 hover:bg-green-500 mt-4 w-36 outline-0 px-4 py-2 bg-green-300 rounded-md text-white font-medium">Buy Now</button>
              </div>
              <img src="" alt="" />
           </div>

           <div className="md:w-1/3 w-full bg-blue-400 px-5 py-10 rounded-xl items-center">
              <div className="flex flex-col gap-3">
                 <h1 className="text-black text-5xl  font-semibold">Tooth Brush</h1>
                 <p className="text-black font-medium">your go-to choice for a naturally <br />clean and eco-friendly smile</p>
                 <button className="border-0 transition duration-300 hover:bg-gray-900 mt-4 w-36 outline-0 px-4 py-2 bg-gray-700 rounded-md text-white font-medium">Buy Now</button>
              </div>
              <img src="" alt="" />
           </div>
           
           
           
        </div>
    </div>
  )
}

export default Page1