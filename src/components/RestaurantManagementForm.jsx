import React, {useState} from 'react';
import {FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import MultiSelect from "./MultiSelect.jsx";
import PropTypes from "prop-types";
import {useForm} from "react-hook-form";
import api from "../api.jsx";
import Button from "@mui/material/Button";
import {CloudUpload} from "@mui/icons-material";
import VisiuallyHiddenInput from "./VisiuallyHiddenInput.jsx";
import Box from "@mui/material/Box";

const RestaurantManagementForm = ({restaurant, cities, cuisines}) => {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        getValues,
        control,
        setValue,
        watch,
        formState: {errors},
    } = useForm({
        defaultValues: restaurant
    });

    const watchMenu = watch('menu');

    const onSubmit = async (data) => {
        setLoading(true);
        await api.patchForm(`/api/owner-restaurant/${restaurant['id']}/`, data).then((res) => {
            window.location.reload()
        });
        setLoading(false);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
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
                </Grid>
                <Grid item xs={12} md={6}>
                    {watchMenu != "image/upload/placeholder" && (
                        <Box
                            component="img"
                            src={typeof watchMenu !== 'string' ? URL.createObjectURL(watchMenu) : restaurant.menu_url}
                            sx={{maxWidth: "100%"}}
                        />
                    )}
                    <Button
                        component="label"
                        role={undefined}
                        variant="outlined"
                        tabIndex={-1}
                        startIcon={<CloudUpload/>}
                    >
                        Upload files
                        <VisiuallyHiddenInput
                            type="file"
                            onChange={(event) => {
                                setValue('menu', event.target.files[0]);
                            }}
                            name="menu"
                        />
                    </Button>
                </Grid>
            </Grid>

            <Grid container my={2}>
                <Grid item xs={12}>
                    <Button variant="contained" type="submit" disabled={loading}>Save</Button>
                </Grid>
            </Grid>
        </form>
    );
};

RestaurantManagementForm.propTypes = {
    restaurant: PropTypes.object.isRequired,
    cities: PropTypes.object.isRequired,
    cuisines: PropTypes.object.isRequired
}
export default RestaurantManagementForm;