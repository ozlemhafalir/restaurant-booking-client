import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

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
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                aria-label="nav tabs example"
                role="navigation"
            >
                <LinkTab label="Reservations" href="/account" />
                <LinkTab label="Profile" href="/account/profile" />
            </Tabs>
        </Box>
    );
}

AccountTabs.propTypes = {
    value: PropTypes.number.isRequired,
}

export default AccountTabs;
