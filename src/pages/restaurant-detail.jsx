import React from 'react';
import {useParams} from "react-router-dom";
import Carousel from "../components/Carousel.jsx";
import {Container, Grid, TextField, Typography} from "@mui/material";
import RestaurantCard from "../components/RestaurantCard.jsx";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined.js";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined.js";
import Maps from "../components/Maps.jsx"

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
                        <Typography variant={'h3'} sx={{display: "flex", alignItems: "center"}}>
                            <RestaurantOutlinedIcon fontSize={"small"} sx={{marginRight: 1}}/>Cuisine
                        </Typography>
                        <Typography variant={'p'}>
                            Restaurant Description
                        </Typography>
                        <Typography variant={'h3'}>
                            Make a reservation
                        </Typography>
                        <Typography variant={'p'}>
                            You are making reservation as ...
                        </Typography>
                        <TextField fullWidth label="fullWidth" id="fullWidth" />
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Maps/>
                    </Grid>
                </Grid>
            </Container>

        </>
    );
};

RestaurantDetail.propTypes = {};

export default RestaurantDetail;