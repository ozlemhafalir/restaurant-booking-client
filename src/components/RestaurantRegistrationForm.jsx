import React, {useState} from 'react';
import {FormControl, Grid, InputLabel, MenuItem, Select, Snackbar, TextField} from "@mui/material";
import MultiSelect from "./MultiSelect.jsx";
import PropTypes from "prop-types";
import {useForm} from "react-hook-form";
import Button from "@mui/material/Button";
import api from "../api.jsx";

const RestaurantRegistrationForm = ({cities, cuisines}) => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState();
    const {
        register,
        handleSubmit,
        getValues,
        control,
        formState: {errors},
    } = useForm();
    const emptyMessage = () => {
        setMessage(null);
    }
    const onSubmit = async (data) => {
        setLoading(true);
        await api.post('/registration', data).then((res) => {
            window.location.href = "/account"
        }).catch((err) => {
            setMessage("Error saving registration, please try again later");
            setLoading(false);
        });
        setLoading(false);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container justifyContent={"center"} alignItems={"center"}>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    sx={{my: 1}}
                    required
                    id="outlined-required"
                    label="Restaurant Name"
                    inputProps={{...register("name")}}
                />
                <TextField
                    fullWidth
                    sx={{my: 1}}
                    required
                    multiline
                    minRows={3}
                    id="outlined-required"
                    label="Restaurant Description"
                    inputProps={{...register("description")}}
                />
                <TextField
                    fullWidth
                    sx={{my: 1}}
                    required
                    id="outlined-required"
                    label="Restaurant Address"
                    inputProps={{...register("address")}}
                />
                <FormControl sx={{my: 1}} fullWidth>
                    <InputLabel id="demo-simple-select-autowidth-label">City</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        label="City"
                        inputProps={{...register("city")}}
                        defaultValue={getValues("city")}
                    >
                        {cities && cities.results.map(item => (
                                <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                            )
                        )}
                    </Select>
                </FormControl>
                <MultiSelect items={cuisines.results} label='Cuisines' control={control}/>
                <Grid container my={2}>
                    <Grid item xs={12}>
                        <Button variant="contained" type="submit" disabled={loading} >Save</Button>
                    </Grid>
                </Grid>
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
    );
};

RestaurantRegistrationForm.propTypes = {
    cities: PropTypes.object.isRequired,
    cuisines: PropTypes.object.isRequired
}
export default RestaurantRegistrationForm;