import React, {useState} from 'react';
import {Grid, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useForm} from "react-hook-form";
import PropTypes from "prop-types";
import api from "../api.jsx";

const ProfileForm = ({data}) => {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        defaultValues: data
    });

    const onSubmit = async (data) => {
        setLoading(true);
        await api.patch('/api/profile/me/', data).then((res) => {
            window.location.reload()
        });
        setLoading(false);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        required
                        id="outlined-required"
                        label="First Name"
                        inputProps={{...register("first_name")}}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        required
                        id="outlined-required"
                        label="Last Name"
                        inputProps={{...register("last_name")}}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        disabled
                        id="outlined-disabled"
                        label="Username"
                        inputProps={{...register("username")}}
                    />
                </Grid>
            </Grid>
            <Grid container my={2}>
                <Grid item xs={12}>
                    <Button variant="contained" type="submit" disabled={loading} >Save</Button>
                </Grid>
            </Grid>
        </form> 
    );
};

ProfileForm.propTypes = {
    data: PropTypes.object.isRequired
}

export default ProfileForm;