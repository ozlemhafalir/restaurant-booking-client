import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import PropTypes from "prop-types";
import {CardActionArea, TextField} from "@mui/material";
import {Link} from "react-router-dom";

export default function RestaurantCard({restaurant}) {
    return (
        <Card sx={{maxWidth: 345}}>
            <CardActionArea component={Link} to={`/restaurant/${restaurant.slug}`}>
            <CardMedia
                sx={{height: 200}}
                component="img"
                loading="lazy"
                image={restaurant.images && restaurant.images.length > 0 ? restaurant.images[0].thumbnail_url : "https://picsum.photos/400/300"}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" sx={{ textDecoration: "none" }} color={"primary"}>
                    {restaurant ? restaurant.name : "Restaurant Name"}
                </Typography>
                <Typography gutterBottom variant="p" fontWeight={"light"} component="div" sx={{
                    display: "flex", alignItems: "center"
                }}>
                    <PlaceOutlinedIcon fontSize={"small"} sx={{marginRight: 1}}/>{restaurant ? restaurant.city_name : "City"}
                </Typography>
                <Typography gutterBottom variant="p" fontWeight={"light"} component="div" sx={{
                    display: "flex", alignItems: "center"
                }}>
                    <RestaurantOutlinedIcon fontSize={"small"} sx={{marginRight: 1}}/>{restaurant.cuisines.map(item => item.name).join(", ")}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{
                    display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 3,
                }}>
                    {restaurant.description}
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
    );
}

RestaurantCard.propTypes = {
    restaurant: PropTypes.object
}
