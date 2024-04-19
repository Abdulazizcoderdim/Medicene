import ImageLogo from "../assets/Fgima project5.png"

const Footer = () => {
  return (
    <div className="bg-white border">
       <div className="lg:container px-5">
         <div className="flex md:my-32 my-20 flex-wrap md:gap-0 gap-5 justify-between">
           <div className="flex flex-col gap-3">
             <div className="flex items-center gap-2">
                <img className="w-16 h-16" src={ImageLogo} alt="" />
                <div className="flex flex-col">
                    <a href="/" className="font-bold text-3xl font-mono">Eco Dental</a>
                    <p className="font-semibold text-[10px] text-green-600">Organic Dental Prupms</p>
                </div>
             </div>
             <p className="font-medium md:flex hidden">Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Minus unde nulla numquam molestias deleniti id! Aliquam <br />tempora atque quaerat cumque tenetur dolores recusandae reiciendis <br />dicta fugiat omnis nulla, nam assumenda.</p>

             <div className="flex gap-2 items-center mt-4">
              <span className="w-10 h-10 rounded-full bg-gray-200"></span>
              <span className="w-10 h-10 rounded-full bg-gray-200"></span>
              <span className="w-10 h-10 rounded-full bg-gray-200"></span>
              <span className="w-10 h-10 rounded-full bg-gray-200"></span>
              <span className="w-10 h-10 rounded-full bg-gray-200"></span>
             </div> 
           </div>
           <div className="md:flex hidden flex-col gap-3 ">
              <h1 className="text-xl font-bold text-black">Quick Links</h1>
              <a href="/" className="font-medium">Our Story</a>
              <a href="/" className="font-medium">Contact Us</a>
              <a href="/" className="font-medium">Shopping & Delivery</a>
           </div>
           <div className="flex flex-col gap-3">
             <h1 className="text-xl font-bold text-black">Recive offers & discounts via e-mail</h1>
             <div className="flex mt-3 items-center">
                <input 
                 style={{
                    borderTopLeftRadius: "5px",
                    borderBottomLeftRadius: "5px"
                 }}
                 type="text" className="p-4 border border-gray-900" placeholder="Enter Email" />
                <button
                 style={{
                    borderTopRightRadius:"5px",
                    borderBottomRightRadius: "5px"
                 }} 
                 className=" h-full -ml-2 border-0 p-4 outline-0 bg-black text-white">Subscribe</button>
             </div>
           </div>
         </div>
       </div> 
       <div className="w-full border-t-2 ">
          <div className="lg:container items-center flex-wrap md:gap-0 gap-3 flex justify-between px-5 py-5">
              <div className="flex justify-center md:w-auto w-full">
                 @ 2024,Eco Dental - All rights reserved.   
              </div>
              <div className="flex items-center gap-5 justify-center md:w-auto w-full">
                 <span>Terms & Conditions</span>
                 <span>Privacy Policy</span>
                 <span>Refund Policy</span>
              </div> 
          </div>
       </div>
    </div>
  )
}

export default Footer