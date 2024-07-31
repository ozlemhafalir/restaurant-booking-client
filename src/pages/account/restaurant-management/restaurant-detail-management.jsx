import React from 'react';
import RestaurantManagementTabs from "../../../components/RestaurantManagementTabs.jsx";
import {Container} from "@mui/material";

const RestaurantDetailManagement = () => {
    return (
        <Container sx={{mt: 20}}>
            <RestaurantManagementTabs value={1}/>
        </Container>
    );
};

export default RestaurantDetailManagement;