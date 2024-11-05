import React from 'react';
import {Container, Grid} from "@mui/material";
import RestaurantManagementTabs from "../../../components/RestaurantManagementTabs.jsx";
import ReservationsList from "../../../components/ReservationsList.jsx";
import {useParams} from "react-router-dom";

const ReservationManagement = () => {
    const params = useParams();
    return (
        <Container sx={{mt: 5}}>
            <RestaurantManagementTabs value={0} id={params['id']}/>
            <Grid container>
                <Grid item xs={12} mt={2}>
                    <ReservationsList/>
                </Grid>
            </Grid>
        </Container>

    );
};

export default ReservationManagement;