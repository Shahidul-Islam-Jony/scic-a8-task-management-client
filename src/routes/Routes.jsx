import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Dashboard from "../layouts/Dashboard";
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";
import PrivateRoute from "./PrivateRoute";
import CreateTask from "../pages/Dashboard/CreateTask/CreateTask";
import ManageTasks from "../pages/Dashboard/ManageTasks/ManageTasks";
import UpdateTask from "../pages/Dashboard/UpdateTask/UpdateTask";
import PreviousTask from "../pages/Dashboard/PreviousTask/PreviousTask";
import Support from "../pages/Support/Support";
import Tasks from "../pages/Tasks/Tasks";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'registration',
                element: <Registration></Registration>
            },
            {
                path:'support',
                element:<Support></Support>
            },
            {
                path:'tasks',
                element:<Tasks></Tasks>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'myProfile',
                element: <MyProfile></MyProfile>
            },
            {
                path: 'createTask',
                element: <CreateTask></CreateTask>
            },
            {
                path: 'manageTasks',
                element: <ManageTasks></ManageTasks>
            },
            {
                path:'updateTask/:id',
                element:<UpdateTask></UpdateTask>
            },
            {
                path:'previousTasks',
                element:<PreviousTask></PreviousTask>
            }
        ]
    }
])

export default router;