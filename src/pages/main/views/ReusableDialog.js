import { Dialog, Slide } from "@mui/material";
import { forwardRef } from "react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const reusableDialog = ({ open, onClose, children }) => {
  return (
      <Dialog aria-labelledby="simple-dialog-title" open={open} maxWidth="md" onClose={onClose} TransitionComponent={Transition} fullWidth scroll="body">
        {children}
      </Dialog>
  );
};

export default reusableDialog;

