import { useEffect, useContext, useState } from "react";
import ProductContext from "../../../context/productsContext/ProductContext";
import FavoriteContext from "../../../context/favoriteContext/FavoriteContext";
import { Backdrop, CircularProgress } from "@mui/material";

const PublicationContainer = (id) => {

    // context products
    const productsContext = useContext(ProductContext)
    const { getProduct, product } = productsContext

    // favoriteContext  
    const favoriteContext = useContext(FavoriteContext);
    const { getFavoriteById, isFavorite } = favoriteContext;

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


    if (!product) return <Backdrop open={true} size={50}>
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
        isFavorite,
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

export default PublicationContainer;