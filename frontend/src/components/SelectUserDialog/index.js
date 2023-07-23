import React from 'react';
import Dialog from '@mui/material/Dialog'
import List from "@mui/material/List";
import Typography from '@mui/material/Typography';
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ImageIcon from '@mui/icons-material/Image';


const SelectUserDialog = ({open, users, onClose}) => {
    return (
        <Dialog open={open} onClose={onClose} fullWidth>
            <Typography variant="h6">
                Please select a user
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {users.map(user => (
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <ImageIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={user.username}/>
                    </ListItem>
                ))
                }
            </List>
        </Dialog>
    )
}

export default SelectUserDialog;