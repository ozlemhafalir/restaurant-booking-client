import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import {useJwt} from "react-jwt";
import AccountMenu from "./AccountMenu.jsx";

export default function SearchAppBar() {
    const {decodedToken, isExpired} = useJwt(localStorage.getItem('access'));
    return (
        <AppBar position={"relative"}>
            <Toolbar>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    color="primary"
                    sx={{flexGrow: 1, textDecoration: "none" }}
                >
                    Restaurant Booking
                </Typography>
                {decodedToken ? <AccountMenu username={decodedToken['name']}/> : (
                    <Button sx={{
                        textTransform: "none"
                    }} href={'/auth/login'}>Login</Button>
                )}

            </Toolbar>
        </AppBar>
    );
}