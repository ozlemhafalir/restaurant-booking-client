import React from 'react';
import PropTypes from 'prop-types';
import {Container, Grid, useTheme} from "@mui/material";
import RestaurantCard from "./RestaurantCard.jsx";

const Footer = props => {
    const theme = useTheme();
    return (
        <Container maxWidth={false} sx={{backgroundColor: theme.palette.primary.main, color: theme.palette.background.default}}>
            <Grid container sx={{py: 4}}>
                <Grid item xs={6}>
                    footer left
                </Grid>
                <Grid item xs={6} sx={{textAlign: "right"}}>
                    footer right
                </Grid>
            </Grid>
        </Container>
    );
};

Footer.propTypes = {

};

export default Footer;