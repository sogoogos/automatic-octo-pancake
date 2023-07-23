import React, {useState} from "react"
import Button from '@mui/material/Button';

import AppHeader from "./components/AppHeader";
import SelectUserDialog from "./components/SelectUserDialog";
import './App.css';
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


const fakeUsers = [
  {username: "sogoogos"},
  {username: "abdf"},
  {username: "sshiozawa"},
  {username: "sogoogos"},
  {username: "abdf"},
  {username: "sshiozawa"},
  {username: "sogoogos"},
  {username: "abdf"},
  {username: "sshiozawa"},
  {username: "sogoogos"},
  {username: "abdf"},
  {username: "sshiozawa"},
]

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const loginUsername = "sogo";
  return (
    <div className="App">
      <AppHeader username={loginUsername}/>
      <Toolbar/>
      <Typography>
          Hello. You can recognize your colleagues here.
      </Typography>
      <Box maxwidth="sm">
        <Button variant="contained" onClick={handleOpen}>Recognize</Button>
      </Box>
      <SelectUserDialog open={open} onClose={handleClose} users={fakeUsers}/>
    </div>
  );
}

export default App;
