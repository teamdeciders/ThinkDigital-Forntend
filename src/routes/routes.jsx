import { createBrowserRouter } from "react-router-dom";
import Main from "../main/Main";
import Home from "../Pages/HomePages/Home";
import ContactPage from "../Pages/ContactPage/ContactPage";
import Explore from "../Pages/Explore/Explore";
import PopularProducts from "../Pages/Popular Products/PopularProducts";
import TopSellers from "../Pages/Top Sellers/TopSellers";
import FreeRecourses from "../Pages/Free Recourses/FreeRecourses";
import Settings from "../Pages/Settings/Settings";
import Helps from "../Pages/Helps/Helps";
import SingleProductPage from "../Pages/SingleProductPage/SingleProductPage";
import Buyer from "../Pages/Profile/Buyer";
import Seller from "../Pages/Profile/Seller";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/popular-products",
        element: <PopularProducts />,
      },
      {
        path: "/product/:id",
        element: <SingleProductPage />,
      },
      {
        path: "/top-sellers",
        element: <TopSellers />,
      },

      {
        path: "/free-recourses",
        element: <FreeRecourses />,
      },

      {
        path: "/contactpage",
        element: <ContactPage />,
      },
      {
        path: "/sttings",
        element: <Settings />,
      },
      {
        path: "/help",
        element: <Helps />,
      },
      {
        path: "/buyer",
        element: <Buyer />,
      },
      {
        path: "/seller",
        element: <Seller />,
      },
    ],
  },
]);

export default routes;
