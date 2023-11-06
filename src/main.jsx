import React from 'react'
import ReactDOM from 'react-dom/client'
import AppStructure from './App.jsx'
import About from './components/about.jsx';
import { createBrowserRouter,RouterProvider, } from 'react-router-dom';
import Error from './components/error.jsx';
import Body from './components/body.jsx';
import Contact from './components/contact.jsx';
import RestaurantInfo from './components/restaurantInfo.jsx';

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
                element: <About/>,
            },
             {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantInfo/>
            }
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={createRouter}/>
)
