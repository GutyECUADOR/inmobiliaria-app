import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export default function NavBar() {
    
    const classes = useStyles();
        return (
            <div>
                <AppBar position="static">
                <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Inmobiliaria
                </Typography>
                <Button color="inherit">Iniciar Sesion</Button>
                <IconButton edge="end" color="inherit" aria-label="menu">
                    <MoreVertIcon />
                </IconButton>
                </Toolbar>
                
            </AppBar>
            </div>
        )
    
}
