import { useState } from "react";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InstructionsModal from "./InstrucitionsModal";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Games Information
            </Typography>
            <Button variant="contained" onClick={handleOpen}>
              Instructions
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <InstructionsModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default Header;
