import { createBrowserRouter } from "react-router-dom";
import Main from "../main/Main";
import Home from "../Pages/HomePages/Home";
import ContactPage from "../Pages/ContactPage/ContactPage";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<Home/>
            }, 
            
             {
                path:"/contactpage",
                element:<ContactPage/>
            },

        ]
    }
])


export default routes