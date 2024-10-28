import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import Carousel from "../components/Carousel.jsx";
import {Container, Dialog, Grid, Typography} from "@mui/material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined.js";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined.js";
import Maps from "../components/Maps.jsx"
import {useQuery} from "@tanstack/react-query";
import api from "../api.jsx";
import {useJwt} from "react-jwt";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ReservationForm from "../components/ReservationForm.jsx";
import LoginRegisterButtons from "../components/LoginRegisterButtons.jsx";

const RestaurantDetail = props => {
    const [menuOpen, setMenuOpen] = useState();
    const {decodedToken} = useJwt(localStorage.getItem('access'));
    const params = useParams()
    const {isPending, error, data} = useQuery({
        queryKey: [`restaurant-detail-${params['slug']}`],
        queryFn: () =>
            api.get(`/api/restaurant/${params['slug']}`).then((res) =>
                res.data,
            ),
    })
    const handleMenuClose = () => {
        setMenuOpen(false);
    }
    const openMenuDialog = () => {
        setMenuOpen(true);
    }
    return data && (
        <>
            <Container maxWidth={false} disableGutters>
                <Carousel images={data.images}/>
            </Container>
            <Container sx={{mt: 5}}>
                <Grid container spacing={4}>
                    <Grid item sm={12} md={6}>
                        <Box sx={{display: "flex"}}>
                            <Typography variant={'h2'} sx={{display: "flex", flexGrow: 1, alignItems: "center"}}>
                                {data.name}
                                <PlaceOutlinedIcon fontSize={"small"}
                                                   sx={{ml: 2, mr: 1}}/><small>{data.city_name}</small>
                            </Typography>
                            {data.menu != "image/upload/placeholder" && (
                                <Button onClick={openMenuDialog}>Menu</Button>
                            )}
                        </Box>
                        <Typography variant={'h3'} sx={{display: "flex", alignItems: "center"}}>
                            <RestaurantOutlinedIcon fontSize={"small"}
                                                    sx={{marginRight: 1}}/>{data.cuisines.map(item => item.name).join(", ")}
                        </Typography>
                        <Typography variant={'p'}>
                            {data.description}
                        </Typography>
                        {
                            decodedToken ? (
                                <ReservationForm restaurantId={data.id}/>
                            ) : (
                                <>
                                    <Typography variant={'subtitle1'} sx={{mt: 2}}>
                                        Login or register to make a reservation.
                                    </Typography>
                                    <LoginRegisterButtons />
                                </>
                            )
                        }
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Maps address={data.address}/>
                        <Typography variant={'body2'} sx={{my: 1}}>
                            {data.address}
                        </Typography>
                    </Grid>
                </Grid>
                <Dialog
                    open={menuOpen}
                    onClose={handleMenuClose}
                    hasCloseButton
                    maxWidth={false}
                >
                    <Box
                        component="img"
                        src={data.menu_url}/>
                </Dialog>
            </Container>

        </>
    );
};

RestaurantDetail.propTypes = {};

export default RestaurantDetail;