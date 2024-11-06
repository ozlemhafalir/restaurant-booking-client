import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LinkTab from "./LinkTab.jsx";


const AccountTabs = ({value}) => {
    return (
        <Box sx={{ width: '100%' }} mb={2}>
            <Tabs
                value={value}
                aria-label="nav tabs example"
                role="navigation"
            >
                <LinkTab icon={<MenuIcon/>} iconPosition="start" label="Reservations" to="/account" />
                <LinkTab icon={<PersonOutlineIcon/>} iconPosition="start" label="Profile" to="/account/profile" />
            </Tabs>
        </Box>
    );
}

AccountTabs.propTypes = {
    value: PropTypes.number.isRequired,
}

export default AccountTabs;
