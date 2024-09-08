import {Container, Grid} from "@mui/material";
import Banner from "./components/Banner.jsx";
import React from "react";
import RestaurantCard from "./components/RestaurantCard";
import {useQuery} from "@tanstack/react-query";


function Home() {
    const { isPending, error, data } = useQuery({
        queryKey: ['restaurants'],
        queryFn: () =>
            fetch('http://127.0.0.1:8000/api/restaurant/').then((res) =>
                res.json(),
            ),
    })
    console.log(isPending);
    console.log(error);
    console.log(data);
    return (
        <>
            <Banner />
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
