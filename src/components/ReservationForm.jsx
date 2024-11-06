import React, {useState} from 'react';
import {Grid, Snackbar, TextField} from "@mui/material";
import PropTypes from "prop-types";
import {useForm} from "react-hook-form";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {DatePicker} from "@mui/x-date-pickers";
import api from "../api.jsx";

const ReservationForm = ({restaurantId}) => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState();
    const {
        register,
        handleSubmit,
        setValue,
        formState: {errors},
    } = useForm({
            defaultValues: {
                restaurant: restaurantId
            }
        }
    );

    const emptyMessage = () => {
        setMessage(null);
    }

    const onSubmit = async (data) => {
        setLoading(true);
        await api.post('/api/reservation/', data).then((res) => {
            window.location.href = "/account"
        }).catch((err) => {
            setMessage("Error saving reservation, please try again later");
            setLoading(false);
        });
        setLoading(false);
    }

    const handleDateChange = (value) => {
        setValue('date' , value.format('YYYY-MM-DD'));
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant={'subtitle1'}>
                        Make a Reservation
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <DatePicker
                        slotProps={{textField: {fullWidth: true, ...register("date")}}}
                        fullWidth
                        sx={{my: 1}}
                        required
                        id="outlined-required"
                        label="Date"
                        format={"YYYY-MM-DD"}
                        onChange={handleDateChange}
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
                            <Button variant="contained" type="submit" disabled={loading}>Submit</Button>
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

ReservationForm.propTypes = {
    restaurantId: PropTypes.number.isRequired,
}
export default ReservationForm;