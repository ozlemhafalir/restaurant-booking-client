import React from 'react';
import {useParams} from "react-router-dom";
import Carousel from "../components/Carousel.jsx";
import {Container, Grid, TextField, Typography} from "@mui/material";
import RestaurantCard from "../components/RestaurantCard.jsx";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined.js";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined.js";
import Maps from "../components/Maps.jsx"
import {useQuery} from "@tanstack/react-query";
import api from "../api.jsx";
import {useJwt} from "react-jwt";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ReservationForm from "../components/ReservationForm.jsx";

const RestaurantDetail = props => {
    const {decodedToken} = useJwt(localStorage.getItem('access'));
    const params = useParams()
    const {isPending, error, data} = useQuery({
        queryKey: [`restaurant-detail-${params['slug']}`],
        queryFn: () =>
            api.get(`/api/restaurant/${params['slug']}`).then((res) =>
                res.data,
            ),
    })
    return data && (
        <>
            <Container maxWidth={false} disableGutters>
                <Carousel images={data.images}/>
            </Container>
            <Container sx={{mt: 5}}>
                <Grid container spacing={4}>
                    <Grid item sm={12} md={6}>
                        <Typography variant={'h2'} sx={{display: "flex", alignItems: "center"}}>
                            {data.name}<PlaceOutlinedIcon
                            fontSize={"small"} sx={{ml: 2, mr: 1}}/><small>{data.city_name}</small>
                        </Typography>
                        <Typography variant={'h3'} sx={{display: "flex", alignItems: "center"}}>
                            <RestaurantOutlinedIcon fontSize={"small"}
                                                    sx={{marginRight: 1}}/>{data.cuisines.map(item => item.name).join(", ")}
                        </Typography>
                        <Typography variant={'p'}>
                            {data.description}
                        </Typography>
                        {
                            decodedToken ? (
                                <ReservationForm/>
                            ) : (
                                <>
                                    <Typography variant={'subtitle1'} sx={{mt: 2}}>
                                        Login or register to make a reservation.
                                    </Typography>
                                    <Box sx={{mt: 2}}>
                                        <Button variant="contained" size={"small"} href={'/auth/signin'}>Login</Button>
                                        <Button variant="text" size={"small"} href={'/auth/signin'}>Register</Button>
                                    </Box>
                                </>
                            )
                        }
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