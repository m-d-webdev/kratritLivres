import React from 'react'
import Home from '../pages/home'
import { BrowserRouter, Route, createBrowserRouter } from 'react-router-dom'
import Layout from './layout'
import LoginPage from '../pages/login'
import RegisterPage from '../pages/register'
import Bibliotheque from '../pages/bibliotheque'
import Categorie from '../pages/categorie'
import VoirLivre from '../pages/voirLivre'


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
            },
            {
                path: "login",
                element: <LoginPage />
            },
            {
                path: "register",
                element: <RegisterPage />
            },
            {
                path: "Bibliotheque",
                element: <Bibliotheque />
            },
            {
                path: "categrie/:c",
                element: <Categorie />
            },
            {
                path: "voir_livre/:id",
                element: <VoirLivre />
            },
        ]
    }
])
export default Routes
