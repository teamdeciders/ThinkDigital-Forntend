import { RouterProvider } from "react-router-dom"
import routes from "./routes/routes"

function App() {
 

  return (
    <div className=" max-w-full overflow-x-hidden">   
       <RouterProvider router={routes}/>

    </div>
  )
}

export default App
