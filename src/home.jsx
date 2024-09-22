import {Container, Grid} from "@mui/material";
import Banner from "./components/Banner.jsx";
import React from "react";
import RestaurantCard from "./components/RestaurantCard";
import {useQuery} from "@tanstack/react-query";
import api from "./api.jsx";


function Home() {
    const {isPending, error, data} = useQuery({
        queryKey: ['restaurants'],
        queryFn: () =>
            api.get('/api/restaurant/').then((res) =>
                res.data
            ),
    })
    return (
        <>
            <Banner/>
            <Container>
                <Grid container>
                    {data?.results?.map((item) =>
                        <Grid item key={item.id} sm={3} md={3}>
                            <RestaurantCard restaurant={item}/>
                        </Grid>
                    )}
                </Grid>
            </Container>
        </>
    )
}

export default Home;
