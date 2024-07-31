import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SettingsIcon from '@mui/icons-material/Settings';

function LinkTab(props) {
    return (
        <Tab
            component="a"
            aria-current={props.selected && 'page'}
            {...props}
        />
    );
}

LinkTab.propTypes = {
    selected: PropTypes.bool,
};

const RestaurantManagementTabs = ({value}) => {
    return (
        <Box sx={{ width: '100%' }} mb={2}>
            <Tabs
                value={value}
                aria-label="nav tabs example"
                role="navigation"
            >
                <LinkTab icon={<MenuIcon/>} iconPosition="start" label="Reservations" href="/account/restaurant/x" />
                <LinkTab icon={<SettingsIcon/>} iconPosition="start" label="Restaurant Detail" href="/account/restaurant/x/details" />
                <LinkTab icon={<InsertPhotoIcon/>} iconPosition="start" label="Restaurant Photos" href="/account/restaurant/x/photos" />
            </Tabs>
        </Box>
    );
}

RestaurantManagementTabs.propTypes = {
    value: PropTypes.number.isRequired,
}

export default RestaurantManagementTabs;
