import React from 'react';
import {useParams} from "react-router-dom";
import Carousel from "../components/Carousel.jsx";
import {Container, Grid, Typography} from "@mui/material";
import RestaurantCard from "../components/RestaurantCard.jsx";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined.js";

const RestaurantDetail = props => {
    const params = useParams()
    return (
        <>
            <Container maxWidth={false} disableGutters>
                <Carousel/>
            </Container>
            <Container sx={{mt: 5}}>
                <Grid container>
                    <Grid item sm={12} md={6}>
                        <Typography variant={'h2'} sx={{display: "flex", alignItems: "center"}}>
                            Hello Restaurant Detail: {params['slug']}<PlaceOutlinedIcon
                            fontSize={"small"} sx={{ml: 2, mr: 1}}/><small>City</small>
                        </Typography>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        MAP
                    </Grid>
                </Grid>
            </Container>

        </>
    );
};

RestaurantDetail.propTypes = {};

export default RestaurantDetail;