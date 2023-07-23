import React from 'react';
import Dialog from '@mui/material/Dialog'
import List from "@mui/material/List";
import Typography from '@mui/material/Typography';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const RecognitionTypes = [
    "Thank You",
    "Inspirational Leader",
    "Great Job",
    "Amazing Mentor",
    "Great Presentation",
    "Going Above and Beyong",
    "Team Player",
    "Making Work Fun",
    "Outside the Box Thinker",
    "Making an Impact",
]

const SelectRecognitionTypeDialog = ({open, user, onClose, onClick}) => {
    return (
        <Dialog open={open} onClose={onClose} fullWidth>
            <Typography variant="h6">
                Select what type of recognition to {user && user.username}
            </Typography>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {RecognitionTypes.map(type => (
                    <ListItemButton onClick={() => onClick(type)}>
                        <ListItemText primary={type}/>
                    </ListItemButton>
                ))
                }
            </List>
        </Dialog>
    )
}

export default SelectRecognitionTypeDialog;