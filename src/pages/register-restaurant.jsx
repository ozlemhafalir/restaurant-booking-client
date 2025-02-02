import React from 'react';
import {useJwt} from "react-jwt";
import {Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useQuery} from "@tanstack/react-query";
import api from "../api.jsx";
import RestaurantRegistrationForm from "../components/RestaurantRegistrationForm.jsx";
import LoginRegisterButtons from "../components/LoginRegisterButtons.jsx";

const RegisterRestaurant = () => {
    const {decodedToken} = useJwt(localStorage.getItem('access'));

    const {isPending: citiesIsPending, error: citiesError, data: citiesData} = useQuery({
        queryKey: ['cities'],
        queryFn: () =>
            api.get('/api/city/').then((res) =>
                res.data,
            ),
    })
    const {isPending: cuisinesIsPending, error: cuisinesError, data: cuisinesData} = useQuery({
        queryKey: ['cuisines'],
        queryFn: () =>
            api.get('/api/cuisine/').then((res) =>
                res.data,
            ),
    })
    return decodedToken ? citiesData && cuisinesData && (
        <Container sx={{mt: 5, textAlign: "center"}}>
            <Typography variant={'h2'} lineHeight={2}>Register Your Restaurant</Typography>
            <Typography variant={'subtitle1'}>You are registering your restaurant as {decodedToken['name']}</Typography>
            <RestaurantRegistrationForm cities={citiesData} cuisines={cuisinesData}></RestaurantRegistrationForm>
        </Container>
    ) : (
        <Container sx={{mt: 5, textAlign: "center"}}>
            <Typography variant={'h2'} lineHeight={2}>Register Your Restaurant</Typography>
            <Typography variant={'subtitle1'}>Login or register to create an account to register your
                restaurant</Typography>
            <LoginRegisterButtons />
        </Container>
    );
};

export default RegisterRestaurant;