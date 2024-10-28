import React from 'react';
import {Container} from "@mui/material";
import RestaurantSearchForm from "../components/RestaurantSearchForm.jsx";
import {useSearchParams} from "react-router-dom";

const Restaurants = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    return (
        <Container sx={{mt: 5}}>
            <RestaurantSearchForm
                selectedCity={searchParams.get('city')}
                selectedCuisine={searchParams.get('cuisine')}
            />
        </Container>
    );
};

export default Restaurants;