import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Dashboard from "./Dashboard"
import Home from "./Home"
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Home/>}/>
      <Route path="/dashboard" element={<>
         
         <SignedIn>
          <Dashboard/>
         </SignedIn>

         <SignedOut>
           <RedirectToSignIn/>
         </SignedOut>
        
      </>}/>
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