import Home2 from "./components/Home";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Header from "./components/Header";
import Page from "./components/Page";
import Page1 from "./components/Page1";
import Products from "./components/Products";
import { useState } from "react";


const Home = () => {
  const [cartItems, setCartItems] = useState(0)

  const addItem = (product) => {
    setCartItems(cartItems+1)
    setCartItems(...cartItems, product)
    localStorage.setItem(...cartItems)
  }
  
 
  
  return (
    <>
     <Header cartItems={cartItems}/>
     <Home2/>
     <Page/>
     <Page1/>
     <Products addItem={addItem} cartItems={cartItems} setCartItems={setCartItems}/>
     <Testimonials/>
     <Footer/>
    </>
  )
}


export default Home

// function FlyoutContent({href,children,Dropdown}) {
//     const [open, setOpen] = useState(false)

//     const showopen = open && Dropdown
//     return(
//         <div
//          onMouseEnter={()=>setOpen(true)} 
//          onMouseLeave={()=>setOpen(false)} 
//          className="relative w-fit h-fit">
//            <a href={href} className="md:flex hidden font-mono relative gap-x-2 items-center cursor-pointer font-medium text-[16px] text-gray-600 hover:text-gray-900 transition duration-200">
//              {children}
//              <span className={`${open ? "rotate-90" : "rotate-0"} transition-all duration-300`}>&gt;</span>
//            </a>

//            {showopen && 
//             <div className="absolute top-9 -translate-x-1/2 left-1/2 bg-white shadow-lg hover:shadow-xl transition duration-200">
//               <div className="absolute -top-4 h-4 left-0 right-0 bg-transparent"/>
//               <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white"/>
//               <Modal/> 
//             </div>
//            }
//         </div>
//     )
// }

// function Modal() {
//     return(
//         <div className="w-64 h-52 px-4 py-2">
//            asdas
//         </div>
//     )
// }


