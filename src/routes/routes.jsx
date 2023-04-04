import { createBrowserRouter } from "react-router-dom";
import Main from "../main/Main";
import Home from "../Pages/HomePages/Home";
import AboutPage from "../Pages/AboutPage/AboutPage";
import Blog1 from "../Pages/Blogs/Blog1";
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
                path:"/aboutpage",
                element:<AboutPage/>
            }, 
            {
                path:"/blogs",
                element:<Blog1/>
            }, 
             {
                path:"/contactpage",
                element:<ContactPage/>
            },

        ]
    }
])


export default routes