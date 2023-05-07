import { Skeleton } from "@mui/material";
import { useContext, useState } from "react";
import SnackBarContext from "../../context/snackbarContext/SnackbarContext";
import SnackBar from "../views/SnackBar";

const SnackBarContainer = () => {
    const [open, setOpen] = useState(true)

    // context Snakbar
    const snackbarContext = useContext(SnackBarContext)
    const { snackbarMsg } = snackbarContext


    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };
    if (!snackbarMsg) return <Skeleton />
    return (
        <SnackBar open={open} handleClose={handleClose} msg={snackbarMsg.msg} severity={snackbarMsg.severity}  />
    );
}

export default SnackBarContainer;