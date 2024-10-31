import React from 'react';
import RestaurantManagementTabs from "../../../components/RestaurantManagementTabs.jsx";
import {Container} from "@mui/material";
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import api from "../../../api.jsx";
import RestaurantImagesForm from "../../../components/RestaurantImagesForm.jsx";

const RestaurantImagesManagement = () => {
    const params = useParams();
    const {isPending, error, data} = useQuery({
        queryKey: [`owner-restaurant-${params['id']}`],
        queryFn: () =>
            api.get(`/api/owner-restaurant/${params['id']}/`).then((res) =>
                res.data,
            ),
    })

    return data && (
        <Container sx={{mt: 5}}>
            <RestaurantManagementTabs value={2} id={params['id']}/>
            <RestaurantImagesForm restaurant={data}/>
        </Container>
    );
};

export default RestaurantImagesManagement;