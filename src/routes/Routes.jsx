import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Dashboard from "../layouts/Dashboard";


const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'registration',
                element:<Registration></Registration>
            }
        ]
    },
    {
        path:'dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            
        ]
    }
])

export default router;