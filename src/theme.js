import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "rgb(255,0,0)"
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 10,
                    textTransform: 'lowercase'
                }
            }
        }
    }
})
export default theme;
