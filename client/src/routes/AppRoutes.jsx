import {createBrowserRouter} from "react-router-dom";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import ForgetPasswd from "../pages/ForgotPasswd";
import AdminPages from "../pages/Admin/AdminPage"
import ADashboardPage from "../pages/Admin/Pages/ADashboardPage";
import AUsersPage from "../pages/Admin/Pages/AUsersPage";
import ATicketsPage from "../pages/Admin/Pages/ATicketsPage";
import AProfilePage from "../pages/Admin/Pages/AProfilePage";
import UsersPage from "../pages/User/UserPage";
import UDashboardPage from "../pages/User/Pages/UDashboardPage"
import UTicketsPage from "../pages/User/Pages/UTicketsPage"
import UProfilePage from "../pages/User/Pages/UProfilePage"

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
                Component: ADashboardPage
            },
            {
                path: "users",
                Component: AUsersPage
            },
            {
                path: "tickets",
                Component: ATicketsPage
            },
            {
                path: "profile",
                Component: AProfilePage
            },
        ]
    },{
        path: "/user",
        Component: UsersPage,
        children : [
            {
                path: "dashboard",
                Component: UDashboardPage
            },
            {
                path: "mytickets",
                Component: UTicketsPage
            },
            {
                path: "myprofile",
                Component: UProfilePage 
            }
        ]
    }
])