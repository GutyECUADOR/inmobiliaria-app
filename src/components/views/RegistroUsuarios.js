import React, { Component } from 'react'
import { Container, Avatar, Typography, Grid, TextField, FormControlLabel, Button, Checkbox } from '@material-ui/core'
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
            <Container maxWidth='xs'>
                <div style={style.paper}>
                    <Avatar style={style.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component='h1' variant='h6'>
                        Creacion de cuenta
                    </Typography>

                    <form style={style.form}>
                        <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="nombres"
                            name="nombres"
                            variant="outlined"
                            required
                            fullWidth
                            id="nombres"
                            label="Nombres"
                            autoFocus
                        />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="apellidos"
                            label="Apellidos"
                            name="apellidos"
                            autoComplete="apellidos"
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Correo electronico"
                            name="email"
                            autoComplete="email"
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="Contraseña"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                            label="Acepto todos los terminos & condiciones."
                        />
                        </Grid>
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={style.submit}
                        >
                           Registrar
                        </Button>
                            
                        </Grid>
                    </form>
                    </div>
            </Container>
        )
    }
}
