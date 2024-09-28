import React, {useEffect, useState} from 'react';
import AccountTabs from "../../components/AccountTabs.jsx";
import {Container, Grid, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useQuery} from "@tanstack/react-query";
import api from "../../api.jsx";
import {useForm} from "react-hook-form";
import ProfileForm from "../../components/ProfileForm.jsx";

const Profile = () => {
    const {isPending, error, data} = useQuery({
        queryKey: ['profile-reservations'],
        queryFn: () =>
            api.get('/api/profile/me/').then((res) =>
                res.data,
            ),
    })
    return data && (
        <Container sx={{mt: 5}}>
            <AccountTabs value={1}/>
            <ProfileForm data={data}/>
        </Container>
    );
};

export default Profile;