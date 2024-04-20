import React from 'react';
import PropTypes from 'prop-types';
import {useParams} from "react-router-dom";

const RestaurantDetail = props => {
    const params = useParams()
    return (
        <div style={{'margin-top': '100px'}}>Hello Restaurant Detail: {params['slug']}</div>
    );
};

RestaurantDetail.propTypes = {

};

export default RestaurantDetail;