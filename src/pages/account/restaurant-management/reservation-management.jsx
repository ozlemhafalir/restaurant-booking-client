import React from 'react';
import {Container, Grid} from "@mui/material";
import RestaurantManagementTabs from "../../../components/RestaurantManagementTabs.jsx";
import {DatePicker} from "@mui/x-date-pickers";
import Button from "@mui/material/Button";
import ReservationsList from "../../../components/ReservationsList.jsx";

const ReservationManagement = () => {
    return (
        <Container sx={{mt: 20}}>
            <RestaurantManagementTabs value={0}/>
            <Grid container>
                <Grid item xs={12} sx={{display:"flex"}}>
                    <DatePicker slotProps={{textField: {fullWidth: true}}} label="Filter by date" />
                    <Button >Filter</Button>
                </Grid>
                <Grid item xs={12} mt={2}>
                    <ReservationsList/>
                </Grid>
            </Grid>
        </Container>

    );
};

export default ReservationManagement;