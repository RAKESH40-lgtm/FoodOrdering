import ReactDOM from "react-dom/client"
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Contact from "./Components/Contact";
import About from "./Components/About";
import NotFound from "./Components/NotFound";
import ResturantDetails from "./Components/ResturantDetails"
const App = () => {

    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}
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
            element: <ResturantDetails />
        }
    ],
    errorElement: <NotFound />
}

])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router} />)