import React from 'react';
import AccountTabs from "../../components/AccountTabs.jsx";
import {Container} from "@mui/material";

const Profile = () => {
    return (
        <Container sx={{mt: 20}}>
            <AccountTabs value={1}/>
            Hello Profile
        </Container>
    );
};

export default Profile;