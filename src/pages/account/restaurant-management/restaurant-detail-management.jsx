import React from 'react';
import RestaurantManagementTabs from "../../../components/RestaurantManagementTabs.jsx";
import {Container} from "@mui/material";
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
    const {isPending: citiesIsPending, error: citiesError, data: citiesData} = useQuery({
        queryKey: ['cities'],
        queryFn: () =>
            api.get('/api/city/').then((res) =>
                res.data,
            ),
    })
    const {isPending: cuisinesIsPending, error: cuisinesError, data: cuisinesData} = useQuery({
        queryKey: ['cuisines'],
        queryFn: () =>
            api.get('/api/cuisine/').then((res) =>
                res.data,
            ),
    })
    return data && citiesData && cuisinesData && (
        <Container sx={{mt: 5}}>
            <RestaurantManagementTabs value={1} id={params['id']}/>
            <RestaurantManagementForm restaurant={data} cities={citiesData} cuisines={cuisinesData}/>

        </Container>
    );
};

export default RestaurantDetailManagement;