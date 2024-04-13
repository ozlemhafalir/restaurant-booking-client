import {createTheme} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#FF6D60',
            light: '#ff857a',
            dark: '#ff5749',
            contrastText: '#fff',
        }
    },
    components: {
        // Name of the component
        MuiButtonBase: {
            defaultProps: {
                // The props to change the default for.
                disableRipple: true, // No more ripple, on the whole application 💣!
            },
        },
        MuiCard: {
            defaultProps: {
                elevation: false
            },
            styleOverrides: {
                root: {
                    margin: 5
                }
            }
        },
        MuiAppBar: {
            defaultProps: {
                color: "default"
            }
        }
    },
});

export default theme;
