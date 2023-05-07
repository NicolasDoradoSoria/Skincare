import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { forwardRef } from 'react'
const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackBar = ({ open, handleClose, msg, severity }) => {
    return (
        <Stack spacing={2}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
            }}>
                <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                    {msg}
                </Alert>
            </Snackbar>
        </Stack>
    );
}

export default SnackBar;