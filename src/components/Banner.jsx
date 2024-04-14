import {Container, FormControl, Grid, InputLabel, MenuItem, Select} from "@mui/material";
import Button from "@mui/material/Button";

const Banner = () => {
    return (
        <Container sx={{
            background: "url(https://picsum.photos/1200/500)",
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
                <Grid item sx={{
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <FormControl sx={{minWidth: 250}} size="small">
                        <InputLabel id="demo-simple-select-label">City</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="City"
                            sx={{
                                backgroundColor: "white",
                            }}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{minWidth: 250}} size="small">
                        <InputLabel id="demo-simple-select-label">Cuisine</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Cuisine"
                            sx={{
                                backgroundColor: "white",
                            }}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant="contained" color={"primary"}>Search</Button>
                </Grid>
            </Container>
        </Container>
    );
};

export default Banner;