import {Container} from "@mui/material";
import RestaurantSearchForm from "./RestaurantSearchForm.jsx";

const Banner = () => {
    return (
        <Container sx={{
            background: "url(/banner.jpg)",
            backgroundSize: "cover",
            height: "60vh",
            position: "relative"
        }} disableGutters maxWidth={false}>
            <Container sx={{
                position: "absolute",
                bottom: 30,
                left: 0,
                right: 0,
            }}>
            <RestaurantSearchForm/>
            </Container>
        </Container>
    );
};

export default Banner;