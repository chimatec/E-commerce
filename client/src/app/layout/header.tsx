import { AppBar, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import React from "react"
import { NavLink } from "react-router-dom";

interface Props {
    darkMode: boolean;
    handleThemeChange:() => void;
}

const middleLink = [
    {title: 'catalog', path: 'catalog'},
    {title: 'about', path: 'about'},
    {title: 'contact', path: 'contact'}

]

const rightLink = [
    {title: 'login', path: '/login'},
    {title: 'register', path: '/register'},
    

]


export default function Header({darkMode, handleThemeChange}:Props){
    return(
        <AppBar position='static' sx={{mb:4}}>
            <Toolbar>
                <Typography variant = 'h6'>
                    CHIMA SHOE-STORE
                </Typography>
                <Switch checked ={darkMode} onChange ={handleThemeChange} />
                <List sx ={{display: 'flex'}}>
                    {middleLink.map(({title, path})=>(
                        <ListItem
                          component={NavLink}
                          to={path}
                          key={path}
                          sx={{color: 'inherit', typography: 'h6'}}
                          
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
                <List sx ={{display: 'flex'}} >
                    {rightLink.map(({title, path})=>(
                        <ListItem
                          component={NavLink}
                          to={path}
                          key={path}
                          sx={{color: 'inherit', typography: 'h6'}}
                          
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
            </Toolbar>

        </AppBar>
    )
}