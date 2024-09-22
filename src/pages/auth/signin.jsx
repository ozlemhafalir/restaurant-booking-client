import React from 'react';
import {Container, Grid, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {useForm} from "react-hook-form";
import api from "../../api.jsx";

const Signin = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        api.post('/token/', data).then((res) => {console.log(res.data)});
    };

    return (
        <Container sx={{mt: 20}}>
            <Typography variant={"h2"} mb={2}>Signin</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} direction={"column"}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="outlined-disabled"
                        label="E-mail"
                        inputProps={{...register("username")}}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="outlined-disabled"
                        label="Password"
                        type={"password"}
                        inputProps={{...register("password")}}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button variant="contained" type={"submit"}>Login</Button>
                </Grid>
            </Grid>
            </form>
        </Container>
    );
};

export default Signin;