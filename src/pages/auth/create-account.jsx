import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import api from "../../api.jsx";
import {Container, Grid, Snackbar, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const CreateAccount = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState();
    const {
        register,
        handleSubmit,
    } = useForm();

    const emptyMessage = () => {
        setMessage(null);
    }

    const onSubmit = async (data) => {
        if (data.password != data.password2) {
            setMessage("Passwords didn't match!");
            return;
        }
        setLoading(true);
        await api.post('/api/register/', data).then((res) => {
            window.location.href = '/signin';
        }).catch((err) => {
            if (err.response?.data?.username) {
                setMessage(`username: ${err.response.data.username[0]}`);
            } else {
                setMessage("Error creating account, please try again later");
            }
            setLoading(false);
        });
        setLoading(false);
    };

    return (
        <Container sx={{mt: 20}}>
            <Typography variant={"h2"} mb={2}>Create Account</Typography>
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
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            id="outlined-disabled"
                            label="Confirm Password"
                            type={"password"}
                            inputProps={{...register("password2")}}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} textAlign={"right"}>
                        <Button variant="contained" type={"submit"} disabled={loading}>Create Account</Button>
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

export default CreateAccount;