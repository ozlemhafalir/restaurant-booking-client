import React from 'react';
import ReservationCard from "../../components/ReservationCard.jsx";
import {Container} from "@mui/material";
import AccountTabs from "../../components/AccountTabs.jsx";
import {useQuery} from "@tanstack/react-query";
import api from "../../api.jsx";

const Reservations = () => {
    const {isPending, error, data} = useQuery({
        queryKey: ['profile-reservations'],
        queryFn: () =>
            api.get('/api/profile-reservation/').then((res) =>
                res.data,
            ),
    })
    console.log(data);
    return (
        <Container sx={{mt: 5}}>
            <AccountTabs value={0}/>
            {data?.results?.map((reservation, i) =>
                <ReservationCard reservation={reservation} key={i}/>
            )}
        </Container>
    );
};

export default Reservations;