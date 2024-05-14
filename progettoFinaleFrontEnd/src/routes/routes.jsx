import { createBrowserRouter, RouterProvider } from "react-router-dom";
//importare AuthContextProvider, Layout,NotFound



 export function Routes() {
    const router = createBrowserRouter([
        {
            element: <AuthContextProvider><Layout /></AuthContextProvider>,
            children: [
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