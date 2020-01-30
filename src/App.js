import React from "react";
import "./App.css";
import ListaInmuebles from "./components/views/ListaInmuebles";
import { MuiThemeProvider, Grid } from "@material-ui/core";
import theme from "./theme/theme";
import NavBar from "./components/layouts/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegistroUsuarios from "./components/views/RegistroUsuarios";

function App() {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <NavBar></NavBar>
        <Grid container>
          <Switch>
            <Route path='/' exact component={ListaInmuebles}></Route>
            <Route path='/registro' exact component={RegistroUsuarios}></Route>
          </Switch>

        </Grid>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
