import React from 'react';
import AccountTabs from "../../components/AccountTabs.jsx";
import {Container, Grid, TextField} from "@mui/material";
import Button from "@mui/material/Button";

const Profile = () => {
    return (
        <Container sx={{mt: 5}}>
            <AccountTabs value={1}/>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        required
                        id="outlined-required"
                        label="First Name"
                        defaultValue="Özlem"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        required
                        id="outlined-required"
                        label="Last Name"
                        defaultValue="Hafalir"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        disabled
                        id="outlined-disabled"
                        label="E-mail"
                        defaultValue="ozlem@"
                    />
                </Grid>
            </Grid>
            <Grid container my={2}>
                <Grid item xs={12}>
                <Button variant="contained">Save</Button>
                    </Grid>
            </Grid>
        </Container>
    );
};

export default Profile;