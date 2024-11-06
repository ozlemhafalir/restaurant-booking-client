import React from 'react';
import Tab from "@mui/material/Tab";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const LinkTab = (props) => {
    return (
        <Tab
            component={Link}
            aria-current={props.selected && 'page'}
            {...props}
        />
    )
};

LinkTab.propTypes = {
    selected: PropTypes.bool,
};
export default LinkTab;