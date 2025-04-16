import React, { useMemo } from 'react';
import ReservationCard from "../../components/ReservationCard.jsx";
import { Alert, Container, Grid } from "@mui/material";
import AccountTabs from "../../components/AccountTabs.jsx";
import { useQuery } from "@tanstack/react-query";
import api from "../../api.jsx";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Reservations = () => {
    const {
        isPending,
        isRefetching,
        isLoading,
        error,
        data,
        refetch,
    } = useQuery({
        queryKey: ['profile-reservations'],
        queryFn: () => api.get('/api/profile-reservation/').then((res) => res.data),
    });

    console.log(data?.results)
    const pastReservations = useMemo(() => data?.results?.filter(item=> new Date(item.date)<Date.now()), [data?.results]);
    console.log(pastReservations)

    const upcomingReservations = useMemo(() => (
        data?.results?.filter(item =>
            new Date(item.date) >= Date.now() && item.status !== "cancelled"
        )
    ), [data?.results]);

    const cancelledReservations = useMemo(() => (
        data?.results?.filter(item =>
            item.status === "cancelled"
        )
    ), [data?.results]);



    return (
        <Container sx={{ mt: 5 }}>
            <AccountTabs value={0} />

            {(isPending || isLoading || isRefetching) && (
                <Grid container alignItems="center" justifyContent="center" padding={5}>
                    <Button disabled>Loading...</Button>
                </Grid>
            )}

            {
                <>
                    <Typography variant="h3" sx={{ mt: 3 }}>
                        Upcoming Reservations
                    </Typography>
                    {upcomingReservations?.map((reservation, i) => (
                        <ReservationCard reservation={reservation} key={i} />
                    ))}

                    <Typography variant="h3" sx={{ mt: 3 }}>
                        Past Reservations
                    </Typography>
                    {pastReservations?.map((reservation, i) => (
                        <ReservationCard reservation={reservation} key={i} />
                    ))}

                    <Typography variant="h3" sx={{ mt: 3 }}>
                        Cancelled Reservations
                    </Typography>
                    {cancelledReservations?.map((reservation, i) => (
                        <ReservationCard reservation={reservation} key={i} />
                    ))}
                </>
            }
        </Container>
    );
};

export default Reservations;
