import React from 'react';
import RestaurantManagementTabs from "../../../components/RestaurantManagementTabs.jsx";
import {Container, Grid, ImageList, ImageListItem} from "@mui/material";
import Dropzone from "react-dropzone";
import Box from "@mui/material/Box";

const RestaurantPhotosManagement = () => {
    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
        },
        {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
        },
        {
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey',
        },
        {
            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            title: 'Basketball',
        },
    ];
    return (
        <Container sx={{mt: 20}}>
            <RestaurantManagementTabs value={2}/>
            <Grid container>
                {itemData.map((item) => (
                    <Grid item xs={12} md={4} lg={3} key={item.img}>
                        <img
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </Grid>
                ))}
                <Grid item xs={12} md={4} lg={3}>
                    <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                        {({getRootProps, getInputProps}) => (
                            <section>
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <Box sx={{
                                        height: 164,
                                        width: 164,
                                        background: 'grey',
                                        display: 'flex',
                                        alignItems: 'center',
                                        alignContent: 'center',
                                        justifyItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        Click here or drag'n drop images
                                    </Box>
                                </div>
                            </section>
                        )}
                    </Dropzone>
                </Grid>
            </Grid>
        </Container>
    );
};

export default RestaurantPhotosManagement;