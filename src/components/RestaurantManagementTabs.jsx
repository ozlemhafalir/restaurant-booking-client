import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import MenuIcon from '@mui/icons-material/Menu';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SettingsIcon from '@mui/icons-material/Settings';
import LinkTab from "./LinkTab.jsx";


const RestaurantManagementTabs = ({value, id}) => {
    return (
        <Box sx={{ width: '100%' }} mb={2}>
            <Tabs
                value={value}
                aria-label="nav tabs example"
                role="navigation"
            >
                <LinkTab icon={<MenuIcon/>} iconPosition="start" label="Reservations" to={`/account/restaurant/${id}`}/>
                <LinkTab icon={<SettingsIcon/>} iconPosition="start" label="Restaurant Detail" to={`/account/restaurant/${id}/details`} />
                <LinkTab icon={<InsertPhotoIcon/>} iconPosition="start" label="Restaurant Photos" to={`/account/restaurant/${id}/photos`} />
            </Tabs>
        </Box>
    );
}

RestaurantManagementTabs.propTypes = {
    value: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
}

export default RestaurantManagementTabs;
