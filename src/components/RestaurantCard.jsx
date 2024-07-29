import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';

export default function RestaurantCard() {
    return (
        <Card sx={{maxWidth: 345}}>
            <CardMedia
                sx={{height: 200}}
                image="https://picsum.photos/400/300"
                title="green iguana"
            />
            <CardContent>
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
                    <RestaurantOutlinedIcon fontSize={"small"} sx={{marginRight: 1}}/>Cuisine
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   Restaurant description
                </Typography>
            </CardContent>
        </Card>
    );
}
