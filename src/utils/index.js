import Auth from "../pages/Auth";
import Home from "../pages/Home";


export const publicRoutes = [
    {
        path: "/",
        Component: Auth
    }
]

export const authRoutes = [
    {
        path: "/",
        Component: Home
    }
]