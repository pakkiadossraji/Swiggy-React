import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import AppStructure from './App.jsx'
// import About from './components/about.jsx';
import { createBrowserRouter,RouterProvider, } from 'react-router-dom';
import Error from './components/error.jsx';
import Body from './components/body.jsx';
import Contact from './components/contact.jsx';
import RestaurantInfo from './components/restaurantInfo.jsx';
import Shimmer from './components/shimmer.jsx';
import Cart from './components/cart.jsx';

const Instamart = lazy(()=> import("./components/instamart.jsx"));
const About = lazy(()=> import("./components/about.jsx"));
const createRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppStructure/>,
        errorElement: <Error/>,
        children:[
           { path: "/",
            element: <Body/>
            },
            {
                path: "/about",
                element: 
                <Suspense fallback={<h1>About page</h1>}> 
                    <About/>
                </Suspense>,
            },
             {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantInfo/>
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path: "/instamart",
                element: 
                <Suspense fallback={<Shimmer/>}>
                    <Instamart/>
                </Suspense>
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={createRouter}/>
)
