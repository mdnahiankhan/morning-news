import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Login from "../../login/login/Login";
import Register from "../../login/register/Register";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home";
import News from "../../Pages/News/News/News";
import Profile from "../../Pages/Other/Profile/Profile";
import Termsandcondition from "../../Pages/Other/Termsandcondition/Termsandcondition";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`https://new-news-server.vercel.app/news`)
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://new-news-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`https://new-news-server.vercel.app/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <Termsandcondition></Termsandcondition>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
    }
])