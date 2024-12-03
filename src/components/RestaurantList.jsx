import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import {useQuery} from "@tanstack/react-query";
import api from "../api.jsx";
import Banner from "./Banner.jsx";
import {Container, Grid} from "@mui/material";
import RestaurantCard from "./RestaurantCard.jsx";
import Button from "@mui/material/Button";

const RestaurantList = ({initialUrl}) => {
    const [nextUrl, setNextUrl] = useState(initialUrl);
    const [results, setResults] = useState([]);
    const {isPending, error, data, refetch} = useQuery({
        queryKey: ['restaurants'],
        queryFn: () =>
            api.get(nextUrl).then((res) =>
                res.data
            ),
    });
    useEffect(() => {
        if (data) {
            setNextUrl(data.next);
            setResults([...results, ...data.results]);
        }
    }, [data])

    const handleClick = () => {
        refetch();
    }
    return (
        <Container>
            <Grid container marginTop={3}>
                {results.map((item) =>
                    <Grid item key={item.id} sm={3} md={3}>
                        <RestaurantCard restaurant={item}/>
                    </Grid>
                )}
            </Grid>
            {nextUrl &&
                <Grid container
                      alignItems="center"
                      justifyContent="center"
                      padding={5}>
                    <Button onClick={handleClick}>Load more!</Button>
                </Grid>
            }
        </Container>
    )
};

RestaurantList.propTypes = {
    initialUrl: PropTypes.string.isRequired
}
export default RestaurantList;