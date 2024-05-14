import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {AuthContextProvider} from "../contexts/AuthContext/AuthContextProvider";
import { ProtectedRoute} from "../components/ProtectedRoute";
import { Layout } from "../components/mainLayout/Layout";
import { NotFound } from "../pages/notFound/NotFount";
import { Home } from "../pages/home/Home";
import { Registration } from "../pages/registration/Registration";
import { Login } from "../pages/login/Login";
import { UserDetails } from "../pages/dettagliUtente/UserDetails"
import { WeatherPage } from "../pages/WeatherPage/WeatherPage";



 export function Routes() {
    const router = createBrowserRouter([
        {
            element: <AuthContextProvider><Layout /></AuthContextProvider>,
            children: [
                {
                    path: "/",
                children: [
                    {
                        path: "",
                        element: <Home />
                    },
                    {
                        path: "login/",
                        children:[
                            {
                                path:"",
                                element: <Login />
                            },
                            {
                                path:"userDetails",
                                element: <ProtectedRoute><UserDetails/> </ProtectedRoute>                                 
                                
                            },
                            {
                                path:"weatherPage",
                                element: <ProtectedRoute><WeatherPage/> </ProtectedRoute>                                 
                                
                            }
                            
                        ]
                    },
                    {
                        path: "registration",
                        element: <Registration />
                    }
                ]
                },
                {
                    path: "*",
                    element: <NotFound />
                }

            ]
        }
    ]);

    return (
        <RouterProvider router={router} />
    );
}