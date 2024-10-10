import {Container, FormControl, Grid, InputLabel, MenuItem, Select} from "@mui/material";
import Button from "@mui/material/Button";
import {useQuery} from "@tanstack/react-query";
import api from "../api.jsx";

const Banner = () => {

    const {isPending: citiesIsPending, error: citiesError, data: citiesData} = useQuery({
        queryKey: ['cities'],
        queryFn: () =>
            api.get('/api/city/').then((res) =>
                res.data,
            ),
    })
    const {isPending: cuisinesIsPending, error: cuisinesError, data: cuisinesData} = useQuery({
        queryKey: ['cuisines'],
        queryFn: () =>
            api.get('/api/cuisine/').then((res) =>
                res.data,
            ),
    })
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
                            {citiesData && citiesData.results.map(item => (
                                    <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                                )
                            )}
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
                            {cuisinesData && cuisinesData.results.map(item => (
                                    <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                                )
                            )}
                        </Select>
                    </FormControl>
                    <Button variant="contained" color={"primary"}>Search</Button>
                </Grid>
            </Container>
        </Container>
    );
};

export default Banner;