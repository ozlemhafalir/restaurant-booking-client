import React, {useMemo} from 'react';
import {Container} from "@mui/material";
import RestaurantSearchForm from "../components/RestaurantSearchForm.jsx";
import {useSearchParams} from "react-router-dom";
import RestaurantList from "../components/RestaurantList.jsx";

const Restaurants = () => {
    const [searchParams] = useSearchParams();
    const selectedCity = useMemo(()=>searchParams.get('city'), [searchParams]);
    const selectedCuisine = useMemo(()=>searchParams.get('cuisine'), [searchParams]);
    const searchName = useMemo(()=>searchParams.get('search'), [searchParams]);
    const apiQueryString = useMemo(() => {
        const selectedCuisineQueryString = selectedCuisine ? `cuisines=${selectedCuisine}` : null;
        const selectedCityQueryString = selectedCity ? `city=${selectedCity}` : null;
        const searchNameQueryString = searchName ? `search=${searchName}` : null;
        return [selectedCityQueryString, selectedCuisineQueryString, searchNameQueryString].filter(value => value).join('&');
    }, [selectedCity, selectedCuisine, searchName])

    return (
        <Container sx={{mt: 5}}>
            <RestaurantSearchForm
                selectedCity={selectedCity}
                selectedCuisine={selectedCuisine}
                searchName={searchName}
            />

            <RestaurantList initialUrl={`/api/restaurant/?${apiQueryString}`}/>
        </Container>
    );
};

export default Restaurants;