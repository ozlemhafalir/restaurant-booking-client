import React from 'react';
import RestaurantManagementTabs from "../../../components/RestaurantManagementTabs.jsx";
import {Container} from "@mui/material";

const RestaurantPhotosManagement = () => {
    return (
        <Container sx={{mt: 20}}>
            <RestaurantManagementTabs value={2}/>
        </Container>
    );
};

export default RestaurantPhotosManagement;