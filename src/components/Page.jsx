import Image1 from "../assets/modal1.png";
import Image2 from "../assets/modal2.png";
import Image3 from "../assets/modal3.png";
import Image4 from "../assets/modal4.png";

const Page = () => {
  return (
    <div className="bg-white my-16">
        <div className="lg:container px-5 flex w-full md:gap-0 gap-8 justify-between flex-wrap">
           
            <div 
             className={`flex bg-[#FFEEF4] shadow-lg hover:scale-105 hover:shadow-xl  transition-all duration-300 rounded-md px-3 py-7 gap-3 bg md:w-[24%] w-full flex-col items-center justify-center`}>
                <img className="w-24 h-24" src={Image1} alt="" />
                <p className="font-semibold text-black">No Artificial Colours</p>
            </div>
            
            <div 
             className={`flex bg-[#E8FBFF] shadow-lg hover:scale-105 hover:shadow-xl  transition-all duration-300 rounded-md px-3 py-7 gap-3 bg md:w-[24%] w-full flex-col items-center justify-center`}>
                <img className="w-24 h-24" src={Image2} alt="" />
                <p className="font-semibold text-black">No Paroben</p>
            </div>
            <div 
             className={`flex bg-[#E5FFF1] shadow-lg hover:scale-105 hover:shadow-xl  transition-all duration-300 rounded-md px-3 py-7 gap-3 bg md:w-[24%] w-full flex-col items-center justify-center`}>
                <img className="w-24 h-24" src={Image3} alt="" />
                <p className="font-semibold text-black">Vegan</p>
            </div>
            <div 
             className={`flex bg-[#EFEFFE] shadow-lg hover:scale-105 hover:shadow-xl  transition-all duration-300 rounded-md px-3 py-7 gap-3 bg md:w-[24%] w-full flex-col items-center justify-center`}>
                <img className="w-24 h-24" src={Image4} alt="" />
                <p className="font-semibold text-black">No Artificial Colours</p>
            </div>

        </div>  
    </div>
  )
}

export default Page