import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

export const theme : ThemeOptions = createMuiTheme({
    palette: {
        primary: {
            light: '#ffffff',
            main: '#ff4524',
            dark: '#000000',
            contrastText: '#ffffff'
        }
    },
    overrides: {
    }
});