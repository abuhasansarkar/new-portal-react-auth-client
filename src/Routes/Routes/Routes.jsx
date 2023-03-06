import { createBrowserRouter } from "react-router-dom";
import Category from "../../components/Pages/Category/Category";
import Home from "../../components/Pages/Home/Home";
import News from "../../components/Pages/News/News";
import TramsAndCondition from "../../components/Pages/Shared/TramsAndCondition/TramsAndCondition";
import SingIn from "../../components/Pages/SingIn/SingIn";
import SingUp from "../../components/Pages/SingUp/SingUp";
import Main from "../../layouts/Main";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
     {
          path: '/',
          element: <Main></Main>,
          children: [
               {
                    path: '/',
                    element: <Home></Home>,
                    loader: () => fetch('https://news-portal-react-auth-server.vercel.app/news')
               },
               {
                    path: '/category/:id',
                    element: <Category></Category>,
                    loader: ({params}) => fetch(`https://news-portal-react-auth-server.vercel.app/category/${params.id}`)
               },
               {
                    path: '/news/:id',
                    element: <PrivateRoutes><News></News></PrivateRoutes>,
                    loader: ({params}) => fetch(`https://news-portal-react-auth-server.vercel.app/news/${params.id}`)
               },
               {
                    path: '/singup',
                    element: <SingUp></SingUp>
               },
               {
                    path: '/singin',
                    element: <SingIn></SingIn>
               },
               {
                    path: '/trams',
                    element: <TramsAndCondition></TramsAndCondition>
               }

          ]
     }
])