import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const InstructionsModal = ({ open, handleClose }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Instructions
          </Typography>
          <Typography id="modal-modal-description1" sx={{ mt: 2 }}>
            1. Search games present in the list from name.
          </Typography>
          <Typography id="modal-modal-description2" sx={{ mt: 2 }}>
            2. Sort games according to scores in low to high or high to low
            order.
          </Typography>
          <Typography id="modal-modal-description3" sx={{ mt: 2 }}>
            3. Filter games according to platform e.g. PC, PlayStation 3, etc.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default InstructionsModal;
