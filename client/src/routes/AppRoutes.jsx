import {createBrowserRouter} from "react-router-dom";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import ForgetPasswd from "../pages/ForgotPasswd";
import Dashboard from "../pages/Admin/Dashboard"

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <div className="text-black">welcome</div>
    },
    {
        path: "/signup",
        Component: SignUp
    },
    {
        path: "/signin",
        Component: SignIn
    },
    {
        path: "/forgot-password",
        Component: ForgetPasswd
    },
    {
        path: "/administrator",
        children: [
            {
                path:'dashboard',
                Component: Dashboard
            }
        ]
    }
])