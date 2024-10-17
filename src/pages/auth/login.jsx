import React, {useState} from 'react';
import {Container, Grid, Link, Snackbar, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {useForm} from "react-hook-form";
import api from "../../api.jsx";

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState();
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm();

    const emptyMessage = () => {
        setMessage(null);
    }
    const onSubmit = async (data) => {
        setLoading(true);
        await api.post('/token/', data).then((res) => {
            const {refresh, access} = res.data;
            localStorage.setItem('access', access);
            localStorage.setItem('refresh', refresh);
            window.location.href = '/';
        }).catch((err) => {
            setMessage("Error logining, please try again later");
            setLoading(false);
        });
        setLoading(false);
    };

    return (
        <Container sx={{mt: 20}}>
            <Typography variant={"h2"} mb={2}>Login</Typography>
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
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            id="outlined-disabled"
                            label="Password"
                            type={"password"}
                            inputProps={{...register("password")}}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} textAlign={"right"}>
                        <Button variant="contained" type={"submit"} disabled={loading}>Login</Button>
                    </Grid>

                </Grid>
                <Grid container direction={'column'} mb={2}>
                    <Grid item xs={12} sm={6} textAlign={"right"}>
                        <Button variant="text" type={"submit"} href='/auth/create-account'>Create new account</Button>
                    </Grid>
                </Grid>
                <Snackbar
                    open={!!message}
                    autoHideDuration={6000}
                    onClose={emptyMessage}
                    message={message}
                    color={"warning"}
                />
            </form>
        </Container>
    );
};

export default Login;