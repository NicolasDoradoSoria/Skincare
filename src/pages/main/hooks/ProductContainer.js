import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
const ProductContainer = ( product ) => {
    const navigate = useNavigate()
    const timer = useRef();

    // progres material ui
    const [success, setSuccess] = useState(false);

    // ventana de dialogo de publicacion
    const [open, setOpen] = useState(false);

    // al hacer click en la imagen navega hacial el componente publication 
    const navigatePublication = () => navigate(`/main/descripcion-producto/${product._id}`)

    // esto hace que haga el efecto de progress y ademas activa el dialog
    const handleButtonClick = () => {
        setOpen(true)
        setSuccess(false);
        timer.current = window.setTimeout(() => {
            setSuccess(true);
        }, 2000);
    }

    const changedialog = () => {
        setOpen(false)
    }

    return {
        product,
        success,
        open,
        timer,
        navigatePublication,
        changedialog,
        handleButtonClick,
    }
}

export default ProductContainer;