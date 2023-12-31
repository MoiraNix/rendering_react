import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ToggleButton from '@mui/material/ToggleButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import theme from './Theme';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import logo from '../../images/favicon.ico';

import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material';

export default function Header() {
  
  let navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openNested, setOpenNested] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null); 

  const clickRightMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const clickFeatures = () => {
    setOpenNested(!openNested);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const clickLeftMenu = event => {
    setOpenNested(false);
    setAnchorEl2(event.currentTarget);
  };

  /* routePaths are defined in App.js */
  const redirectRoute = routePath => {
    navigate(routePath);
    setAnchorEl(null);
  };

  const img = <img style={{marginRight: 10}}src={logo}/>

  return (
    //<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color= "inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={clickLeftMenu}
              title={img}
            >
            <MenuIcon />
          </IconButton>


          {/* Left hand side */}

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl2}
            open={Boolean(anchorEl2)}
            onClose={() => {setAnchorEl2(null);setOpenNested(true);}}>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
              >
                <ListItem sx = {{cursor: 'pointer'}} onClick={() => redirectRoute("/")}>
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem sx = {{cursor: 'pointer'}} onClick={() => redirectRoute("/About")}>
                  <ListItemText  primary="About" />
                </ListItem>
                <ListItem sx = {{cursor: 'pointer'}} onClick={clickFeatures}>
                  <ListItemText button primary="Features" />
                  {openNested ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openNested} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                  <ListItem sx = {{cursor: 'pointer'}} onClick={() => redirectRoute("/Employees")}>
                      <ListItemText primary="Employees" />
                    </ListItem>
                  <ListItem sx = {{cursor: 'pointer'}} onClick={() => redirectRoute("/PACS")}>
                      <ListItemText primary="PACS" />
                    </ListItem>
                    <ListItem sx = {{cursor: 'pointer'}} onClick={() => redirectRoute("/Testing")}>
                      <ListItemText primary="Testing" />
                    </ListItem>
                  </List>
                </Collapse>
              </List>
          </Menu>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Rendering Demo
          </Typography>
          
        
        </Toolbar>
      </AppBar>
    //</Box>
  );
}
//<ToggleButton className = 'themeMode' onClick={this.props.handleToggle}>Dark Mode</ToggleButton>