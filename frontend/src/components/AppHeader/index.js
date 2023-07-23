import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from "@mui/material/Toolbar";
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";


const AppHeader = ({username}) => {
    return (
        <AppBar>
             <Toolbar>
                 <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Hello {username}
                  </Typography>
                 <IconButton>
                     <AccountCircle/>
                 </IconButton>
             </Toolbar>
        </AppBar>
    )
}

export default AppHeader;