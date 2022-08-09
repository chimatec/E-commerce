import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import React from "react"
import { NavLink} from "react-router-dom";

interface Props {
    darkMode: boolean;
    handleThemeChange:() => void;
}

const middleLink = [
    {title: 'catalog', path: '/catalog'},
    {title: 'about', path: '/about'},
    {title: 'contact', path: '/contact'}

]

const rightLink = [
    {title: 'login', path: '/login'},
    {title: 'register', path: '/register'},
]

const navistyle ={
    color: 'inherit',
    textDecoration: 'none',
    typography: 'h6',
    '&:hover':{
        color: 'grey.500'
    },
    '&.active': {
        color: 'text.secondary'
    }

}

export default function Header({darkMode, handleThemeChange}: Props){
    return(
        <AppBar position='static' sx={{mb:4}}>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between',alignItems: 'centre'}}>

                <Box display= 'flex' alignItems='centre'>
                    <Typography variant = 'h6' component={NavLink} 
                        to='/'
                        exact
                        sx={navistyle}>
                        CHIMA SHOE-STORE
                    </Typography>
                    <Switch checked ={darkMode} onChange ={handleThemeChange} />
                </Box>

                <List sx ={{display: 'flex'}}>
                    {middleLink.map(({title, path}) =>(
                        <ListItem
                          component={NavLink}
                          to={path}
                          key={path}
                          sx={navistyle}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
                <Box display='flex' alignItems='center'>
                    <IconButton size ='large' sx ={{color: 'inherit'}}>
                        <Badge badgeContent ={4} color ='secondary'>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
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
                </Box>
            </Toolbar>
        </AppBar>
    )
}