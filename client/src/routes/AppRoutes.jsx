import {createBrowserRouter} from "react-router-dom";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import ForgetPasswd from "../pages/ForgotPasswd";
import AdminPages from "../pages/Admin/AdminPage"
import Dashboard from "../pages/Admin/Pages/Dashboard";
import UsersPage from "../pages/Admin/Pages/UsersPage";

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
        Component:AdminPages,
        children : [
            {
                path: "dashboard",
                Component: Dashboard
            },
            {
                path: "users",
                Component: UsersPage
            },
            {
                path: "tickets",
                element: <div>tickets</div>
            },
            {
                path: "profile",
                element: <div>profile</div>
            },
        ]
    }
])