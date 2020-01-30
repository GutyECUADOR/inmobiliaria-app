import React, { Component } from 'react'
import { Container, Avatar, Typography, Grid, TextField } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const style = {
    paper: {
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: 8,
        backgroundColor: '#e53935'
    },
    form: {
        width : '100%',
        marginTop : 8
    }
}

export default class RegistroUsuarios extends Component {
    render() {
        return (
            <Container maxWidth='md'>
                <div style={style.paper}></div>
                    <Avatar style={style.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component='h1' variant='h6'>
                        Creacion de cuenta
                    </Typography>

                    <form style={style.form}>
                        <Grid container spacing={2}>
                            <Grid item md={6} xs={12}>
                                <TextField name='nombre' label='Ingrese su nombre' fullWidth></TextField>
                            </Grid>
                        </Grid>
                    </form>

            </Container>
        )
    }
}
