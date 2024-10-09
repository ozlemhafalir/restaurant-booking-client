import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import api from "../../api.jsx";
import {Container, Grid, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const ForgotPassword = () => {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm();

    const onSubmit = async (data) => {
        setLoading(true);
        await api.post('/token/', data).then((res) => {
            const {refresh, access} = res.data;
            localStorage.setItem('access', access);
            localStorage.setItem('refresh', refresh);
            window.location.href = '/';
        });
        setLoading(false);
    };
    return (
        <Container sx={{mt: 20}}>
            <Typography variant={"h2"} mb={2}>Reset your password.</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2} direction={"column"}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            id="outlined-disabled"
                            label="Username"
                            inputProps={{...register("username")}}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} textAlign={"right"}>
                        <Button variant="text" type={"submit"}>Continue</Button>
                    </Grid>

                    <Grid container direction={'column'} mb={2}>
                        <Grid item xs={12} sm={6} textAlign={"right"}>
                        <Button variant="text" type={"submit"} href='/auth/create-account'>Create new account</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default ForgotPassword;