import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './home.jsx'
import './index.css'
import {Container, CssBaseline, ThemeProvider} from "@mui/material";
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
import ReservationManagement from "./pages/account/restaurant-management/reservation-management.jsx";
import RestaurantDetailManagement from "./pages/account/restaurant-management/restaurant-detail-management.jsx";
import RestaurantPhotosManagement from "./pages/account/restaurant-management/restaurant-photos-management.jsx";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";


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
    },
    {
        path: '/account/restaurant/:id',
        element: <ReservationManagement/>
    },
    {
        path: '/account/restaurant/:id/details',
        element: <RestaurantDetailManagement/>
    },
    {
        path: '/account/restaurant/:id/photos',
        element: <RestaurantPhotosManagement/>
    },
]);

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <CssBaseline/>
                    <ResponsiveAppBar/>
                    <Container maxWidth={false} disableGutters sx={{minHeight: "70vh"}}>
                        <RouterProvider router={router}/>
                    </Container>
                    <Footer/>
                </LocalizationProvider>
            </ThemeProvider>
        </QueryClientProvider>
    </React.StrictMode>,
)
