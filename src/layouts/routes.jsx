import React from 'react'
import Home from '../home/home'
import { BrowserRouter, Route, createBrowserRouter } from 'react-router-dom'
import Layout from './layout'


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "catalogue",
                element: <Home />
            }
        ]
    }
])
export default Routes
