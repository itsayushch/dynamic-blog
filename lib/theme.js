import { createMuiTheme } from '@material-ui/core';

export const theme = (type = 'light') => createMuiTheme({
    palette: { type },
    typography: {
        h1: { fontFamily: 'Josefin Sans, sans-serif' },
        h2: { fontFamily: 'Josefin Sans, sans-serif' },
        h3: { fontFamily: 'Josefin Sans, sans-serif' },
        h4: { fontFamily: 'Josefin Sans, sans-serif' },
        h5: { fontFamily: 'Josefin Sans, sans-serif' }
    },
});