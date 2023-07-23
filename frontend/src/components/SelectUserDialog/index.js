import React from 'react';
import Dialog from '@mui/material/Dialog'
import List from "@mui/material/List";
import Typography from '@mui/material/Typography';
import Avatar from "@mui/material/Avatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import AccountCircle from '@mui/icons-material/AccountCircle';


const SelectUserDialog = ({open, users, onClose, onClick}) => {
    return (
        <Dialog open={open} onClose={onClose} fullWidth>
            <Typography variant="h6">
                Please select a user
            </Typography>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {users.map(user => (
                    <ListItemButton onClick={() => onClick(user)}>
                        <ListItemAvatar>
                            <Avatar>
                                <AccountCircle/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={user.username}/>
                    </ListItemButton>
                ))
                }
            </List>
        </Dialog>
    )
}

export default SelectUserDialog;