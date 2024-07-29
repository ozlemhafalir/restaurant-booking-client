import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './home.jsx'
import './index.css'
import {CssBaseline, ThemeProvider} from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import theme from "./theme";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Banner from "./components/Banner.jsx";
import ResponsiveAppBar from "./components/ResponsiveAppBar.jsx";
import RestaurantDetail from "./pages/restaurant-detail.jsx";
import Footer from "./components/Footer.jsx";
import Reservations from "./pages/account/reservations.jsx";
import Profile from "./pages/account/profile.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/restaurant/:slug",
        element: <RestaurantDetail/>
    },
    {
        path: "/account",
        element: <Reservations/>
    },
    {
        path: "/account/profile",
        element: <Profile/>
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <ResponsiveAppBar/>
            <RouterProvider router={router}/>
            <Footer/>
        </ThemeProvider>
    </React.StrictMode>,
)
