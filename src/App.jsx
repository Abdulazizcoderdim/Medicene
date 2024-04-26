import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from "./Home"
import NotFound from "./components/NotFound"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Home  />}/>
      <Route path="*" element={<NotFound/>}/>
      {/* <Route path="/dashboard" element={<> */}
         
         {/* <SignedIn> */}
          {/* <Dashboard/> */}
         {/* </SignedIn> */}

         {/* <SignedOut> */}
           {/* <RedirectToSignIn/> */}
         {/* </SignedOut> */}
        
      {/* </>}/> */}
    </>
  )
)


const App = () => {

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App