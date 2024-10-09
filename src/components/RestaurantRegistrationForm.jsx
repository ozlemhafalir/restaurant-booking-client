import React, {useState} from 'react';
import {FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import MultiSelect from "./MultiSelect.jsx";
import PropTypes from "prop-types";
import {useForm} from "react-hook-form";
import Button from "@mui/material/Button";

const RestaurantRegistrationForm = ({cities, cuisines}) => {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        getValues,
        control,
        formState: {errors},
    } = useForm();

    const onSubmit = async (data) => {}
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
        </form>
    );
};

RestaurantRegistrationForm.propTypes = {
    cities: PropTypes.object.isRequired,
    cuisines: PropTypes.object.isRequired
}
export default RestaurantRegistrationForm;