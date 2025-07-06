import ReactDOM from "react-dom/client"
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Contact from "./Components/Contact";
import About from "./Components/About";
import NotFound from "./Components/NotFound";
import { lazy, Suspense } from "react";
const App = () => {

    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}
const ResturantDetails = lazy(()=>import("./Components/ResturantDetails"))
const router = createBrowserRouter([{
    path: '/',
    element: <App />,
    children: [
        {
            path: '/',
            element: <Body />
        },
        {
            path: '/contact',
            element: <Contact />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/resturant/:resId",
            element: <Suspense fallback={<h1>Loading ...</h1>}><ResturantDetails /></Suspense>
        }
    ],
    errorElement: <NotFound />
}

])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router} />)