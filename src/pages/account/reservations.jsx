import React, {useMemo} from 'react';
import ReservationCard from "../../components/ReservationCard.jsx";
import {Container} from "@mui/material";
import AccountTabs from "../../components/AccountTabs.jsx";
import {useQuery} from "@tanstack/react-query";
import api from "../../api.jsx";
import Typography from "@mui/material/Typography";

const Reservations = () => {
    const {isPending, error, data} = useQuery({
        queryKey: ['profile-reservations'],
        queryFn: () =>
            api.get('/api/profile-reservation/').then((res) =>
                res.data,
            ),
    });

    console.log(data?.results)
    const pastReservations = useMemo(() => data?.results?.filter(item=> new Date(item.date)<Date.now()), [data?.results]);
    console.log(pastReservations)

    const upcomingReservations = useMemo(() => data?.results?.filter(item=> new Date(item.date)>=Date.now()), [data]);
    console.log(upcomingReservations)

    return (
        <Container sx={{mt: 5}}>
            <AccountTabs value={0}/>

            <Typography variant={'h3'}>
                Upcoming Reservations
            </Typography>
            {upcomingReservations?.map((reservation, i) =>
                <ReservationCard reservation={reservation} key={i}/>
            )}
            <Typography variant={'h3'}>
                Past Reservations
            </Typography>
            {pastReservations?.map((reservation, i) =>
                <ReservationCard reservation={reservation} key={i}/>
            )}
        </Container>
    );
};

export default Reservations;