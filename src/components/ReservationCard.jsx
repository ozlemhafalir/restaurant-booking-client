import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import Box from "@mui/material/Box";
import {Menu, MenuItem} from "@mui/material";

export default function ReservationCard() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Card sx={{display: "flex", my: 1}}>
            <CardMedia
                component="img"
                sx={{height: 200, width: 200}}
                image="https://picsum.photos/400/300"
                title="green iguana"
            />
            <CardContent sx={{py: 0, flexGrow: 1}}>
                <Typography gutterBottom variant="h6" component="a" href="/restaurant/slug" sx={{ textDecoration: "none" }} color={"primary"}>
                    Restaurant Name
                </Typography>
                <Typography gutterBottom variant="p" fontWeight={"light"} component="div" sx={{
                    display: "flex", alignItems: "center"
                }}>
                    <PlaceOutlinedIcon fontSize={"small"} sx={{marginRight: 1}}/>City
                </Typography>
                <Typography gutterBottom variant="p" fontWeight={"light"} component="div" sx={{
                    display: "flex", alignItems: "center"
                }}>
                    Nov. 7, 2023, 3 guests
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Note:
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
                    Action
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
                    <MenuItem onClick={handleClose}>Confirm</MenuItem>
                </Menu>
            </CardActions>
        </Card>
    );
}
