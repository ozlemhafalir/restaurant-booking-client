import {Container, Grid} from "@mui/material";
import Banner from "./components/Banner.jsx";
import React, {useEffect, useState} from "react";
import RestaurantCard from "./components/RestaurantCard";
import {useQuery} from "@tanstack/react-query";
import api from "./api.jsx";
import Button from "@mui/material/Button";


function Home() {
    const [nextUrl, setNextUrl] = useState('/api/restaurant/');
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
        <>
            <Banner/>
            <Container>
                <Grid container>
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
        </>
    )
}

export default Home;
