import React from 'react';
import { Typography, Link } from '@material-ui/core';
const Copyright = () => {
    return ( 
        <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
            KAO Sport
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    );
         
}
 
export default Copyright;