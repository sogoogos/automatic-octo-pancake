import React, {useState} from "react"
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';

import SelectUserDialog from "./components/SelectUserDialog";
import './App.css';


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
  return (
    <div className="App">
      {/*<header className="App-header">*/}
        <Container maxwidth="sm">
          <Button variant="contained" onClick={handleOpen}>Recognize</Button>
        </Container>
        <SelectUserDialog open={open} onClose={handleClose} users={fakeUsers}/>
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<p>*/}
        {/*  Edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}
      {/*</header>*/}
    </div>
  );
}

export default App;
