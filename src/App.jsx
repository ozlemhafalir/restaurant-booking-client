import './App.css'
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import {Container, Grid} from "@mui/material";
import Banner from "./components/Banner.jsx";
import React from "react";
import MediaCard from "./components/MediaCard";

function App() {
    return (
        <>
            <Container>
                <ResponsiveAppBar/>
            </Container>
            <Container disableGutters>
                <Banner/>
            </Container>
            <Container>
                <Grid container>
                    {Array.from(Array(10).keys()).map((i) =>
                        <Grid item key={i} sm={3} md={3}>
                            <MediaCard/>
                        </Grid>
                    )}
                </Grid>
            </Container>
        </>
    )
}

export default App;
