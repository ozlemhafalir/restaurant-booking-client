import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import {Menu, MenuItem} from "@mui/material";
import PropTypes from "prop-types";
import api from "../api.jsx";

export default function ReservationCard({reservation}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = async () => {
        await api.patch(`/api/profile-reservation/${reservation.id}/`, {
            status: 'cancelled'
        }).then((res) => {
            window.location.reload()
        });
        setAnchorEl(null);
    };
    return (
        <Card sx={{display: "flex", my: 1}}>
            <CardMedia
                component="img"
                sx={{height: 200, width: 200}}
                image={reservation.restaurant.images && reservation.restaurant.images.length > 0 ? reservation.restaurant.images[0].image_url : "https://picsum.photos/400/300"}
                title="green iguana"
            />
            <CardContent sx={{py: 0, flexGrow: 1}}>
                <Typography gutterBottom variant="h6" component="a" href={`/restaurant/${reservation.restaurant.slug}`} sx={{ textDecoration: "none" }} color={"primary"}>
                    {reservation.restaurant.name}
                </Typography>
                <Typography gutterBottom variant="p" fontWeight={"light"} component="div" sx={{
                    display: "flex", alignItems: "center"
                }}>
                    <PlaceOutlinedIcon fontSize={"small"} sx={{marginRight: 1}}/>City
                </Typography>
                <Typography gutterBottom variant="p" fontWeight={"light"} component="div" sx={{
                    display: "flex", alignItems: "center"
                }}>
                    {reservation.date}, {reservation.guests} guests
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Note: {reservation.note}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    {reservation.status}
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>Cancel</MenuItem>
                </Menu>
            </CardActions>
        </Card>
    );
}

ReservationCard.propTypes = {
    reservation: PropTypes.object.isRequired,
}
