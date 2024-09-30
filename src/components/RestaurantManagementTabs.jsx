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

const RestaurantManagementTabs = ({value, id}) => {
    return (
        <Box sx={{ width: '100%' }} mb={2}>
            <Tabs
                value={value}
                aria-label="nav tabs example"
                role="navigation"
            >
                <LinkTab icon={<MenuIcon/>} iconPosition="start" label="Reservations" href={`/account/restaurant/${id}`}/>
                <LinkTab icon={<SettingsIcon/>} iconPosition="start" label="Restaurant Detail" href={`/account/restaurant/${id}/details`} />
                <LinkTab icon={<InsertPhotoIcon/>} iconPosition="start" label="Restaurant Photos" href={`/account/restaurant/${id}/photos`} />
            </Tabs>
        </Box>
    );
}

RestaurantManagementTabs.propTypes = {
    value: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
}

export default RestaurantManagementTabs;
