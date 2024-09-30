import React from 'react';
import RestaurantManagementTabs from "../../../components/RestaurantManagementTabs.jsx";
import {
    Container,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    NativeSelect,
    OutlinedInput,
    Select,
    TextField
} from "@mui/material";
import MultiSelect from "../../../components/MultiSelect.jsx";
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import api from "../../../api.jsx";
import RestaurantManagementForm from "../../../components/RestaurantManagementForm.jsx";

const RestaurantDetailManagement = () => {
    const params = useParams();
    const {isPending, error, data} = useQuery({
        queryKey: ['profile-reservations'],
        queryFn: () =>
            api.get(`/api/owner-restaurant/${params['id']}/`).then((res) =>
                res.data,
            ),
    })
    return (
        <Container sx={{mt: 5}}>
            <RestaurantManagementTabs value={1} id={params['id']}/>
            <RestaurantManagementForm restaurant={data}/>
        </Container>
    );
};

export default RestaurantDetailManagement;