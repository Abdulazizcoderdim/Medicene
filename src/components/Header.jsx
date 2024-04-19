import { useState } from "react"
import ImageLogo from "../../public/Fgima project5.png"

const Header = () => {
    const [openModal, setOpenModal] = useState(false)
    const [openRoute, setOpenRoute] = useState(false)
    const [openRoute2, setOpenRoute2] = useState(false)
    const [openRoute3, setOpenRoute3] = useState(false)

    const handleOpen = () => {
        setOpenModal(true)
    }
    
    const handleClose = () => {
        setOpenModal(false)
    }
  return (
    <div className="bg-white relative">
       <div className="lg:container  px-5 py-2 flex items-center justify-between shadow-md">
          <div className="flex gap-x-2 items-center">
              <span onClick={handleOpen} className="text-[30px] text-black cursor-pointer md:hidden">=</span>

              <div className={`${openModal ? "left-0" : "-left-56"} md:hidden shadow-xl gap-5 flex justify-between flex-col absolute top-0 h-[100vh] bg-black px-3 py-1 w-56 transition-all duration-300`}>
                <div className="flex flex-col gap-5">
                  <div className="flex w-full justify-between items-center">
                      <img src={ImageLogo} className="w-10 h-10" alt="" /> 
                      <span className="cursor-pointer w-7 h-7 hover:bg-slate-700 transition duration-200 flex justify-center rounded-full">
                       <span 
                         onClick={handleClose}
                         className="flex justify-center items-center text-white">
                          ✖
                       </span>    
                    </span> 
                  </div>

                  <div className="flex flex-col gap-y-3">
                   <a href="/" className="text-white text-xl w-full px-2 py-2 hover:bg-gray-700 transition-all duration-300 rounded-md">Home</a>
                   <div className={`${openRoute ? "bg-gray-700" : ""} flex flex-col gap-y-2 px-2 py-2 hover:bg-gray-700 transition-all cursor-pointer duration-300 rounded-md`}>
                     <div className="flex items-center gap-x-2 transition-all duration-300" onClick={()=>setOpenRoute((prev)=>!prev)}>
                       <a href="/teth-whitening" className="text-white text-xl">teeth whitening</a>
                       <span className={`text-white transition-all duration-300 ${openRoute ? "rotate-90" : "rotate-0"}`}>&gt;</span>
                     </div>

                     {openRoute && <div className="flex flex-col gap-y-1 pl-2 transition-all duration-300">
                       <a href="/" className="text-white hover:text-blue-500">teeth1</a>
                       <a href="/" className="text-white hover:text-blue-500">teeth2</a>
                       <a href="/" className="text-white hover:text-blue-500">teeth3</a>
                     </div>}
                   </div>
                   
                   <div className={`${openRoute2 ? "bg-gray-700" : ""} flex flex-col gap-y-2 px-2 py-2 hover:bg-gray-700 transition-all cursor-pointer duration-300 rounded-md`}>
                     <div className="flex items-center gap-x-2 transition-all duration-300" onClick={()=>setOpenRoute2((prev)=>!prev)}>
                       <a href="/toothpaste" className="text-white text-xl">toothpaste</a>
                       <span className={`text-white transition-all duration-300 ${openRoute2 ? "rotate-90" : "rotate-0"}`}>&gt;</span>
                     </div>

                     {openRoute2 && <div className="flex flex-col gap-y-1 pl-2 transition-all duration-300">
                       <a href="/" className="text-white hover:text-blue-500">teeth1</a>
                       <a href="/" className="text-white hover:text-blue-500">teeth2</a>
                       <a href="/" className="text-white hover:text-blue-500">teeth3</a>
                     </div>}
                   </div>
                   
                   <div className={`${openRoute3 ? "bg-gray-700" : ""} flex flex-col gap-y-2 px-2 py-2 hover:bg-gray-700 transition-all cursor-pointer duration-300 rounded-md`}>
                     <div className="flex items-center gap-x-2 transition-all duration-300" onClick={()=>setOpenRoute3((prev)=>!prev)}>
                       <a href="/mouthwash" className="text-white text-xl">mouthwash</a>
                       <span className={`text-white transition-all duration-300 ${openRoute3 ? "rotate-90" : "rotate-0"}`}>&gt;</span>
                     </div>

                     {openRoute3 && <div className="flex flex-col gap-y-1 pl-2 transition-all duration-300">
                       <a href="/" className="text-white hover:text-blue-500">teeth1</a>
                       <a href="/" className="text-white hover:text-blue-500">teeth2</a>
                       <a href="/" className="text-white hover:text-blue-500">teeth3</a>
                     </div>}
                   </div>
                   
                  </div>
                </div>
                 <div className="flex text-white pb-4">
                    <p className="text-white text-[13px]">@2024. By Abdulaziz Rustamov</p>
                 </div>
              </div>

             <img className="object-cover w-14" src="../../public/Fgima project5.png" alt="" />
             <div className="flex flex-col">
               <a href="/" className="font-bold text-4xl font-mono">Eco Dental</a>
               <p className="font-semibold text-[10px] text-green-600">Organic Duntal Umberal</p>
             </div> 
          </div>
          
          <nav className="flex gap-x-7 items-center">
            <a href="/" className="md:flex hidden font-medium font-mono text-[16px] text-gray-600 hover:text-gray-900 transition duration-200">Home</a>
            <FlyoutContent Dropdown={Modal} href="/teth-whitening">
                <span>teth whitening</span>
            </FlyoutContent>
            <FlyoutContent Dropdown={Modal} href="/toothpaste">
                <span>toothpaste</span>
            </FlyoutContent>
            <FlyoutContent Dropdown={Modal} href="/mouthwash">
                <span>mouthwash</span>
            </FlyoutContent>
            
            <div className="flex ml-4 items-center gap-x-3">
               <span className="cursor-pointer">😎</span>
               <span className="cursor-pointer">🛒</span>
            </div>
          </nav>
       </div>
    </div>
  )
}

function FlyoutContent({href,children,Dropdown}) {
    const [open, setOpen] = useState(false)

    const showopen = open && Dropdown
    return(
        <div
         onMouseEnter={()=>setOpen(true)} 
         onMouseLeave={()=>setOpen(false)} 
         className="relative w-fit h-fit">
           <a href={href} className="md:flex hidden font-mono relative gap-x-2 items-center cursor-pointer font-medium text-[16px] text-gray-600 hover:text-gray-900 transition duration-200">
             {children}
             <span className={`${open ? "rotate-90" : "rotate-0"} transition-all duration-300`}>&gt;</span>
           </a>

           {showopen && 
            <div className="absolute top-9 -translate-x-1/2 left-1/2 bg-white shadow-lg hover:shadow-xl transition duration-200">
              <div className="absolute -top-4 h-4 left-0 right-0 bg-transparent"/>
              <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white"/>
              <Modal/> 
            </div>
           }
        </div>
    )
}

function Modal() {
    return(
        <div className="w-64 h-52 px-4 py-2">
           asdas
        </div>
    )
}

export default Header