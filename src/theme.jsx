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
    typography: {
        h2: {
            fontSize: '1.2',
        },
        h3: {
            fontSize: '1.1',
            fontWeight: "lighter",
            lineHeight: '2.2',
        }
    },
    components: {
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
