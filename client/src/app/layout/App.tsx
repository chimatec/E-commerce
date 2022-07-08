import {Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import Header from "./header";
import React from "react";
import { Route, Router} from "react-router-dom";
import Home from "../../features/home/Home";
import ProductDetails from "../../features/catalog/ProductDetails";
import AboutUs from "../../features/about/AboutUs";
import ContactUs from "../../features/contact/ContactUs";

function App() {
  const[darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark': 'light'
const theme = createTheme({
  palette:{
    mode: paletteType,
    background: {
      default: paletteType === 'light' ? '#eaeaea' :'#121212'

    }
  }
})
function handleThemeChange() {
  setDarkMode(!darkMode);

}
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header darkMode ={darkMode} handleThemeChange ={handleThemeChange}/>
      <Container>
        <Route exact path='/' component={Home}/>
        <Route exact path='/catalog' component={Catalog}/>
        <Route path='/catalog/:id' component={ProductDetails}/>
        <Route path='/about' component={AboutUs}/>
        <Route path='/contact' component={ContactUs}/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
