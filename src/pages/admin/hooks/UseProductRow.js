import { useRef, useState } from "react";

export default function UseProductRow() {
    //hooks
    const [open, setOpen] = useState(false);
    // progres material ui
    const [success, setSuccess] = useState(false);

    const timer = useRef();

    const onClickEditProduct = () => {
        setOpen(true)
        setSuccess(false);
        timer.current = window.setTimeout(() => {
            setSuccess(true);
        }, 2000);
    }

    const changeDialog = () => {
        setOpen(false)
    }



    return {
        onClickEditProduct,
        open,
        setOpen,
        changeDialog
    }
}
