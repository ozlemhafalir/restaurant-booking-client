import React from "react";
import RestaurantList from "./components/RestaurantList.jsx";
import Banner from "./components/Banner.jsx";
import Typography from "@mui/material/Typography";
import {Container} from "@mui/material";


function Home() {
    return (
        <>
            <Banner/>
            <br/>
            <Container>
            <Typography variant="h2">Featured Restaurants</Typography>
            </Container>
            <RestaurantList initialUrl={'/api/restaurant/?is_featured=true'}/>
                <Container>
            <Typography variant="h2">All Restaurants</Typography>
                    </Container>
            <RestaurantList initialUrl={'/api/restaurant/'}/>
        </>
    )
}

export default Home;
