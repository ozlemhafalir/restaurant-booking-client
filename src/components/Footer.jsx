import React from 'react';
import PropTypes from 'prop-types';
import {Container, Grid, Link, useTheme} from "@mui/material";
import RestaurantCard from "./RestaurantCard.jsx";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = props => {
    const theme = useTheme();
    return (
        <Container maxWidth={false}
                   sx={{backgroundColor: theme.palette.primary.main, color: theme.palette.background.default}}>
            <Grid container sx={{py: 1}}>
                <Grid item xs={6}>
                    A Portfolio Project By Ozlem Hafalir
                </Grid>
                <Grid item xs={6} sx={{textAlign: "right"}}>
                    <Link href="/register-restaurant" style={{color: theme.palette.background.default}}>
                        Register Your Restaurant
                    </Link>

                </Grid>
            </Grid>
            <Grid container columnSpacing={0} sx={{py: 1}}>
                <Grid item xs={6}>
                    <Link href="https://instagram.com/" target="_blank">
                        <InstagramIcon style={{color: theme.palette.background.default}}></InstagramIcon>
                    </Link>
                    <Link href="https://linkedin.com/" target="_blank">
                        <LinkedInIcon style={{color: theme.palette.background.default}}></LinkedInIcon>
                    </Link>
                </Grid>
            </Grid>
        </Container>
    );
};

Footer.propTypes = {};

export default Footer;