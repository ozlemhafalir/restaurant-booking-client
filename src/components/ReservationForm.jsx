import React, {useState} from 'react';
import {Grid, TextField} from "@mui/material";
import PropTypes from "prop-types";
import {useForm} from "react-hook-form";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {DatePicker} from "@mui/x-date-pickers";

const ReservationForm = ({restaurantId}) => {
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
            <Grid container>
                <Grid item xs={12} >
                    <Typography variant={'subtitle1'}>
                        Make a Reservation
                    </Typography>
                </Grid>
                <Grid item xs={12} >
                    <DatePicker
                        slotProps={{ textField: { fullWidth: true } }}
                        fullWidth
                        sx={{my: 1}}
                        required
                        id="outlined-required"
                        label="Date"
                        inputProps={{...register("date")}}
                    />
                    <TextField
                        fullWidth
                        sx={{my: 1}}
                        required
                        type={'number'}
                        id="outlined-required"
                        label="Guests"
                        inputProps={{...register("guests")}}
                    />
                    <TextField
                        fullWidth
                        sx={{my: 1}}
                        required
                        multiline
                        minRows={3}
                        id="outlined-required"
                        label="Note"
                        inputProps={{...register("note")}}
                    />
                    <Grid container my={2}>
                        <Grid item xs={12}>
                            <Button variant="contained" type="submit" disabled={loading} >Submit</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    );
};

ReservationForm.propTypes = {
    restaurantId: PropTypes.number.isRequired,
}
export default ReservationForm;