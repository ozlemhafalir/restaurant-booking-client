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
import ResponsiveAppBar from "./components/ResponsiveAppBar.jsx";
import RestaurantDetail from "./pages/restaurant-detail.jsx";
import Footer from "./components/Footer.jsx";
import Reservations from "./pages/account/reservations.jsx";
import Profile from "./pages/account/profile.jsx";
import ReservationManagement from "./pages/account/restaurant-management/reservation-management.jsx";
import RestaurantDetailManagement from "./pages/account/restaurant-management/restaurant-detail-management.jsx";
import RestaurantImagesManagement from "./pages/account/restaurant-management/restaurant-images-management.jsx";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Login from "./pages/auth/login.jsx";
import RegisterRestaurant from "./pages/register-restaurant.jsx";
import CreateAccount from "./pages/auth/create-account.jsx";
import Restaurants from "./pages/restaurants.jsx";
import MyRestaurants from "./pages/account/my-restaurants.jsx";


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
        element: <RestaurantImagesManagement/>
    },
    {
        path: '/auth/login',
        element: <Login/>
    },

    {
        path: '/restaurants',
        element: <Restaurants/>
    },
    {
        path: '/account/my-restaurants',
        element: <MyRestaurants/>
    },

    {
        path: '/auth/create-account',
        element: <CreateAccount/>
    },
    {
        path: '/register-restaurant',
        element: <RegisterRestaurant/>
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
