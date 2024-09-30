import React from 'react';
import RestaurantManagementTabs from "../../../components/RestaurantManagementTabs.jsx";
import {
    Container,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    NativeSelect,
    OutlinedInput,
    Select,
    TextField
} from "@mui/material";
import MultiSelect from "../../../components/MultiSelect.jsx";
import {useParams} from "react-router-dom";

const RestaurantDetailManagement = () => {
    const params = useParams();
    return (
        <Container sx={{mt: 5}}>
            <RestaurantManagementTabs value={1} id={params['id']}/>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        sx={{my: 1}}
                        required
                        id="outlined-required"
                        label="Restaurant Name"
                        defaultValue="Malmö Spice Garden"
                    />
                    <TextField
                        fullWidth
                        sx={{my: 1}}
                        required
                        multiline
                        minRows={3}
                        id="outlined-required"
                        label="Restaurant Description"
                        defaultValue="Indian Food Expertise"
                    />
                    <TextField
                        fullWidth
                        sx={{my: 1}}
                        required
                        id="outlined-required"
                        label="Restaurant Address"
                        defaultValue="Maria Bangata 2B"
                    />
                    <FormControl sx={{my: 1}} fullWidth>
                        <InputLabel id="demo-simple-select-autowidth-label">City</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={'stockholm'}
                            autoWidth
                            label="City"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'stockholm'}>Stockholm</MenuItem>
                            <MenuItem value={'malmö'}>Malmö</MenuItem>
                            <MenuItem value={'göteborg'}>Göteborg</MenuItem>
                        </Select>
                    </FormControl>
                    <MultiSelect names={[
                        'Asian',
                        'Asian Fusion',
                        'Italian',
                        'Indian',
                        'Turkish',
                    ]}label='Cuisines' defaultNames={['Asian']}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    menu
                </Grid>

            </Grid>
        </Container>
    );
};

export default RestaurantDetailManagement;