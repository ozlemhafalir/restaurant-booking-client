import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

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

const AccountTabs = ({value}) => {
    return (
        <Box sx={{ width: '100%' }} mb={2}>
            <Tabs
                value={value}
                aria-label="nav tabs example"
                role="navigation"
            >
                <LinkTab icon={<MenuIcon/>} iconPosition="start" label="Reservations" href="/account" />
                <LinkTab icon={<PersonOutlineIcon/>} iconPosition="start" label="Profile" href="/account/profile" />
            </Tabs>
        </Box>
    );
}

AccountTabs.propTypes = {
    value: PropTypes.number.isRequired,
}

export default AccountTabs;
