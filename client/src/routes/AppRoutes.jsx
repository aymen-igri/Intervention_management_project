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
import TechnicianPage from "../pages/Technician/TechnicianPage";
import TDashboardPage from "../pages/Technician/Pages/TDashboardPage";
import TTicketsPage from "../pages/Technician/Pages/TTicketsPage";
import TProfilePage from "../pages/Technician/Pages/TProfilePages";
import WelcomePage from "../pages/WelcomePage";
import BannedUserPage from "../pages/BannedUserPage";

export const routes = createBrowserRouter([
    {
        path: "/",
        Component: WelcomePage
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
        path: "/banned",
        Component: BannedUserPage
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
    },{
        path: "/technician",
        Component: TechnicianPage,
        children: [
            {
                path: "dashboard",
                Component: TDashboardPage
            },
            {
                path: "mytickets",
                Component: TTicketsPage
            },
            {
                path: "myprofile",
                Component: TProfilePage
            }
        ]
    }
])