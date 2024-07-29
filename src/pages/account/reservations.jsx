import React from 'react';
import ReservationCard from "../../components/ReservationCard.jsx";
import {Container, Grid} from "@mui/material";
import RestaurantCard from "../../components/RestaurantCard.jsx";
import AccountTabs from "../../components/AccountTabs.jsx";

const Reservations = () => {
    return (
        <Container sx={{mt: 20}}>
            <AccountTabs value={0}/>
            {Array.from(Array(5).keys()).map((i) =>
                <ReservationCard key={i}/>
            )}
        </Container>
    );
};

export default Reservations;