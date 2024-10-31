import React, {useState} from 'react';
import PropTypes from "prop-types";
import {Grid, ImageList, ImageListItem} from "@mui/material";
import Box from "@mui/material/Box";
import {CloudUpload, Delete} from "@mui/icons-material";
import VisiuallyHiddenInput from "./VisiuallyHiddenInput.jsx";
import Button from "@mui/material/Button";
import {useForm} from "react-hook-form";
import api from "../api.jsx";
import IconButton from "@mui/material/IconButton";

const RestaurantImagesForm = ({restaurant}) => {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        getValues,
        control,
        setValue,
        watch,
        formState: {errors},
    } = useForm({
        defaultValues: {
            images: restaurant.images
        }
    });
    const watchImages = watch('images');
    const handleUploadMore = (event) => {
        const newValue = [...watchImages, ...Array.from(event.target.files).map(file => ({
            image: file,
            restaurant: restaurant.id,
            image_url: URL.createObjectURL(file),
        }))]
        setValue('images',
            newValue
        );
    };
    const onSubmit = async (data) => {
        setLoading(true);
        for (const item of data["images"]) {
            if (item.id && item.deleted) {
                await api.delete(`/api/owner-restaurant/${restaurant['id']}/image/${item.id}`);
            } else if (!item.id) {
                await api.postForm(`/api/owner-restaurant/${restaurant['id']}/image/`, item);
            }
        }
        window.location.reload();
        setLoading(false);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container>
                <ImageList variant="masonry" cols={3} gap={8}>
                    {watchImages.filter(item => !item.deleted).map((item, index) => (
                        <ImageListItem key={item.img}>
                            <Box
                                component="img"
                                src={`${item.image_url}`}
                                sx={{maxWidth: "100%"}}
                            />
                            <IconButton aria-label="delete" color={"primary"} size={"small"}
                                        sx={{position: "absolute", backgroundColor: "white", top: "20px", right: "5px"}}
                                        onClick={() => {
                                            if (item.id) {
                                                setValue("images", watchImages.map(image =>
                                                    image == item ? {...image, deleted: true} : image
                                                ));
                                                item.deleted = true;
                                            } else {
                                                setValue("images", watchImages.filter(image => image != item))
                                            }
                                        }} disabled={loading}>
                                <Delete/>
                            </IconButton>
                        </ImageListItem>
                    ))}
                </ImageList>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} lg={3}
                      my={1}>
                    <Button
                        component="label"
                        role={undefined}
                        variant="outlined"
                        tabIndex={-1}
                        startIcon={<CloudUpload/>}
                        disabled={loading}
                    >
                        Upload more...
                        <VisiuallyHiddenInput
                            type="file"
                            onChange={handleUploadMore}
                            multiple
                            name="menu"
                            disabled={loading}
                        />
                    </Button>
                </Grid>
                <Grid item xs={12} mb={5}>
                    <Button variant="contained" type="submit" disabled={loading}>Save</Button>
                </Grid>
            </Grid>
        </form>
    );
};

RestaurantImagesForm.propTypes = {
    restaurant: PropTypes.object.isRequired
}
export default RestaurantImagesForm;