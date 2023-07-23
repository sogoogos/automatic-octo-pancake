import React, { useState } from "react";
import Button from "@mui/material/Button";

import AppHeader from "./components/AppHeader";
import SelectUserDialog from "./components/SelectUserDialog";
import SelectRecognitionTypeDialog from "./components/SelectRecognitionTypeDialog";
import RecognitionDetail from "./components/RecognitionDetailDialog";
import "./App.css";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const fakeUsers = [...Array(10).keys()].map(i => ({
  username: `user${i}`,
  id: i
}));

function App() {
  const [openSelectUser, setOpenSelectUser] = useState(false);
  const [openSelectType, setOpenSelectType] = useState(false);
  const [openRecognitionDetail, setOpenRecognitionDetail] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedType, setSelectedType] = useState(0);
  const [recognitionBody, setRecognitionBody] = useState("");

  const selectUser = user => {
    setSelectedUser(user);
    setOpenSelectUser(false);
    setOpenSelectType(true);
  };

  const selectRecognitionType = type => {
    setSelectedType(type);
    setOpenSelectType(false);
    setOpenRecognitionDetail(true);
  };

  const loginUsername = "sogo";
  return (
    <div className="App">
      <AppHeader username={loginUsername} />
      <Toolbar />
      <Typography>Hello. You can recognize your colleagues here.</Typography>
      <Box maxwidth="sm">
        <Button variant="contained" onClick={() => setOpenSelectUser(true)}>
          Recognize
        </Button>
      </Box>
      <SelectUserDialog
        open={openSelectUser}
        onClose={() => setOpenSelectUser(false)}
        users={fakeUsers}
        onClick={selectUser}
      />
      <SelectRecognitionTypeDialog
        open={openSelectType}
        onClose={() => setOpenSelectType(false)}
        user={selectedUser}
        onClick={selectRecognitionType}
      />
      <RecognitionDetail
        open={openRecognitionDetail}
        onClose={() => setOpenRecognitionDetail(false)}
        user={selectedUser}
        type={selectedType}
        body={recognitionBody}
        onChange={setRecognitionBody}
      />
    </div>
  );
}

export default App;
