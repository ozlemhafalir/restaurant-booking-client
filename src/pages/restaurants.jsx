import React, {useMemo} from 'react';
import {Container, Grid} from "@mui/material";
import RestaurantSearchForm from "../components/RestaurantSearchForm.jsx";
import {useSearchParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import api from "../api.jsx";
import RestaurantCard from "../components/RestaurantCard.jsx";

const Restaurants = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const selectedCity = useMemo(()=>searchParams.get('city'), [searchParams]);
    const selectedCuisine = useMemo(()=>searchParams.get('cuisine'), [searchParams]);
    const searchName = useMemo(()=>searchParams.get('search'), [searchParams]);
    const apiQueryString = useMemo(() => {
        const selectedCuisineQueryString = selectedCuisine ? `cuisines=${selectedCuisine}` : null;
        const selectedCityQueryString = selectedCity ? `city=${selectedCity}` : null;
        const searchNameQueryString = searchName ? `search=${searchName}` : null;
        return [selectedCityQueryString, selectedCuisineQueryString, searchNameQueryString].filter(value => value).join('&');
    }, [selectedCity, selectedCuisine, searchName])

    const {isPending, error, data} = useQuery({
        queryKey: [],
        queryFn: () =>
            api.get(`/api/restaurant/?${apiQueryString}`).then((res) =>
                res.data
            ),
    })
    return (
        <Container sx={{mt: 5}}>
            <RestaurantSearchForm
                selectedCity={selectedCity}
                selectedCuisine={selectedCuisine}
                searchName={searchName}
            />
            <Grid container sx={{mt: 3}}>
                {data?.results?.map((item) =>
                    <Grid item key={item.id} sm={3} md={3}>
                        <RestaurantCard restaurant={item}/>
                    </Grid>
                )}
            </Grid>
        </Container>
    );
};

export default Restaurants;