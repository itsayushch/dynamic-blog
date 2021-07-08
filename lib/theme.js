import { createTheme } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';

export const theme = (type = 'light') =>
    createTheme({
        palette: {
            type,
            primary: {
                main: blue[200]
            }
        },
        typography: {
            h1: { fontFamily: 'Josefin Sans, sans-serif' },
            h2: { fontFamily: 'Josefin Sans, sans-serif' },
            h3: { fontFamily: 'Josefin Sans, sans-serif' },
            h4: { fontFamily: 'Josefin Sans, sans-serif' },
            h5: { fontFamily: 'Josefin Sans, sans-serif' }
        }
    });
