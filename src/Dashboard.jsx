import Footer from "./components/Footer"
import Header from "./components/Header"
import Home2 from "./components/Home"
import Page from "./components/Page"
import Page1 from "./components/Page1"
// import Products from "./components/Products"
import Testimonials from "./components/Testimonials"

const Dashboard = () => {
   

  return (
    <>
     <Header/>
     <Home2/>
     <Page/>
     {/* <Products/> */}
     <Page1/>
     <Testimonials/>
     <Footer/>
    </>
  )
}

export default Dashboard