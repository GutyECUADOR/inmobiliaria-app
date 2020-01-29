import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
          main: '#10a75f',
        },
        secondary: {
          main: '#e53935',
        },
        common: {
            main: '#e53935',
            white: 'white'
          },
        spacing: 10
    }  
})

export default theme;