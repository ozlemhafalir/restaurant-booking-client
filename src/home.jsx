import {Container, Grid} from "@mui/material";
import Banner from "./components/Banner.jsx";
import React from "react";
import RestaurantCard from "./components/RestaurantCard";


function Home() {
    return (
        <>
            <Banner />
            <Container>
                <Grid container>
                    {Array.from(Array(10).keys()).map((i) =>
                        <Grid item key={i} sm={3} md={3}>
                            <RestaurantCard/>
                        </Grid>
                    )}
                </Grid>
            </Container>
        </>
    )
}

export default Home;
