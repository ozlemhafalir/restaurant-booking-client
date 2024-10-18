import React from 'react';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const LoginRegisterButtons = () => {
    return (
        <Box sx={{mt: 2}}>
            <Button variant="contained" size={"small"} href={`/auth/login?next=${window.location.pathname}`}>Login</Button>
            <Button variant="text" size={"small"} href={`/auth/create-account?next=${window.location.pathname}`}>Register</Button>
        </Box>
    );
};

export default LoginRegisterButtons;