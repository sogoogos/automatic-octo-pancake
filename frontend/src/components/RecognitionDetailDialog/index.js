import React from "react";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const RecognitionDetail = ({ open, user, type, onClose, body, onChange }) => {
  return (
    <>
      <Dialog open={open} onClose={onClose} fullWidth>
        <Typography variant="h6">{type}</Typography>
        <Typography variant="h5">{user && user.username}</Typography>
        <TextField
          InputProps={{
            disableUnderline: true
          }}
          inputProps={{
            maxLength: 500
          }}
          label="Type recognition"
          multiline
          rows={10}
          value={body}
          onChange={e => onChange(e.target.value)}
        />
        <Stack spacing={2} direction="row">
          <Button variant="contained">Send</Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => onChange("")}
          >
            Clear
          </Button>
        </Stack>
      </Dialog>
    </>
  );
};

export default RecognitionDetail;
