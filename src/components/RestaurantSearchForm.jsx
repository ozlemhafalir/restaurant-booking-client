import React from 'react';
import {FormControl, Grid, InputLabel, MenuItem, Select} from "@mui/material";
import Button from "@mui/material/Button";
import {useQuery} from "@tanstack/react-query";
import api from "../api.jsx";
import PropTypes from "prop-types";

const RestaurantSearchForm = ({selectedCity, selectedCuisine}) => {
    const {isPending: citiesIsPending, error: citiesError, data: citiesData} = useQuery({
        queryKey: ['cities'],
        queryFn: () =>
            api.get('/api/city/').then((res) =>
                res.data,
            ),
    })
    const {isPending: cuisinesIsPending, error: cuisinesError, data: cuisinesData} = useQuery({
        queryKey: ['cuisines'],
        queryFn: () =>
            api.get('/api/cuisine/').then((res) =>
                res.data,
            ),
    })
    return (
        <form method="GET" action="/restaurants">
            <Grid item sx={{
                display: "flex",
                justifyContent: "center"
            }}>
                <FormControl sx={{minWidth: 250}} size="small">
                    <InputLabel id="label-city">City</InputLabel>
                    <Select
                        labelId="label-city"
                        label="City"
                        sx={{
                            backgroundColor: "white",
                        }}
                        name="city"
                        defaultValue={selectedCity}
                    >
                        {citiesData && citiesData.results.map(item => (
                                <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                            )
                        )}
                    </Select>
                </FormControl>
                <FormControl sx={{minWidth: 250}} size="small">
                    <InputLabel id="label-cuisine">Cuisine</InputLabel>
                    <Select
                        labelId="label-cuisine"
                        label="Cuisine"
                        sx={{
                            backgroundColor: "white",
                        }}
                        name="cuisine"
                        defaultValue={selectedCuisine}
                    >
                        {cuisinesData && cuisinesData.results.map(item => (
                                <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                            )
                        )}
                    </Select>
                </FormControl>
                <Button variant="contained" color={"primary"} type={"submit"}>Search</Button>
            </Grid>
        </form>
    );
};

RestaurantSearchForm.propTypes = {
    selectedCity: PropTypes.number,
    selectedCuisine: PropTypes.number,
};

export default RestaurantSearchForm;