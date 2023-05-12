import { useEffect, useState } from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import UseContext from "../../../hooks/UseContext";
/*
************************************************************************************************

ESTE CUSTOM HOOK TRAE DE USECONTENXT LOS SIGUIENTES HOOKS
A- getProduct ES PARA CARGAR EL PRODUCTO EL MISMO NECESITA QUE LE PASEMOS UN ID Y SE UTILIZA EN EL USE EFFECT
B- product
c- getFavoriteById carga el si existen favoritos 

TIENE LOS SIGUIENTES USESTATE
A- quantity SE VALIDA QUE NO SEA MENOR A 0 Y QUE SEA MENOR AL STOCK
B- activeStep EL CONTADOR DE IMAGEN
C- checked LA TRANSICION DEL BOTON VISTA PREVIA
D- QUE ES PARA AGREGAR OPACIDAD

************************************************************************************************
*/
const UsePublication = (id) => {

    const { getProduct, product, getFavoriteById } =  UseContext();

    //hooks 
    const [quantity, setQuantity] = useState(1)

    // contador de imagen
    const [activeStep, setActiveStep] = useState(0);

    // trancicion de boton vista previa
    const [checked, setChecked] = useState(false);

    // agrega opacidad pasando el mouse por la imagen
    const [cardMediaStyle, setCardMediaStyle] = useState({ opacity: 1 })

    const smallImage = (count) => {
        setChecked(false);
        setTimeout(() => {
            setChecked(true);
            setActiveStep(count)
            setCardMediaStyle({ opacity: 0.5, transition: `opacity 1000ms ease-in-out` })
        }, "1000")
    }

    const handleNextAndBack = (num) => {
        setChecked(false);
        setTimeout(() => {
            setChecked(true);
            setActiveStep((prevActiveStep) => prevActiveStep + num);
        }, "1000")
    }

    // cambiar cantidad 
    const changeQuantity = (e) => {
        const input = e.target.value
        if (input > 0 && stock <= input) setQuantity(input);
    }
    // cambiar cantidad a traves de los iconos + u - 
    const changeQuantityIcon = (quantityNew) => {
        if (quantityNew > 0) setQuantity(quantityNew)
    }

    useEffect(() => {

        // carga favoritos al front, el backend save que productos tiene agregado a favorito cada usuario 
        // getFavorites()
        getFavoriteById(id)
        smallImage(0)
        getProduct(id)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    if (!product) return <Backdrop open={false} size={50}>
        <CircularProgress color="inherit" />
    </Backdrop>
    const { descripcion, price, name, stock, images, category, checkedOffer, originalPrice } = product;

    return {
        checked,
        changeQuantity,
        changeQuantityIcon,
        handleNextAndBack,
        quantity,
        smallImage,
        activeStep,
        checkedOffer,
        originalPrice,
        category,
        descripcion,
        price,
        name,
        stock,
        images,
        cardMediaStyle,
    }

}

export default UsePublication;