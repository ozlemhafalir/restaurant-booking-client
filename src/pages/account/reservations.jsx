import React from 'react';
import ReservationCard from "../../components/ReservationCard.jsx";
import {Container} from "@mui/material";
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