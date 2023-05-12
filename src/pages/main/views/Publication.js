import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import '../Publication.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FavoriteIcon from '@mui/icons-material/Favorite';
import UsePublication from "../hooks/UsePublication";
import PublicationImages from "../components/PublicationImages";
import PublicationContent from "../components/PublicationContent";
import UseContext from "../../../hooks/UseContext";

/*
************************************************************************************************
ESTA VISTA ES LA ENCARGADA DE MOSTRAR LA PUBLICACION ME TRAE DE LA LOGICA EL PRODUCTO Y DEL CONTEXT ISFAVORITE


************************************************************************************************
*/
const Publication = ({ id }) => {

    const {
        changeQuantity,
        changeQuantityIcon,
        quantity,
        checkedOffer,
        originalPrice,
        category,
        descripcion,
        price,
        name,
        stock,
    } = UsePublication(id)
    const { isFavorite } = UseContext()
    if (!name) return null
    return (
        <PublicationContent category={category} name={name}>

            <div className="card_center">

                <PublicationImages />

                <div className="card_right_box">
                    <div className="card_title"><h1>{name}</h1></div>
                    <div className="card_origin_price">{checkedOffer ? <p>${originalPrice}</p> : null}</div>
                    <div className="card_price"><p>${price}</p></div>
                    <div className="card_description"><p>{descripcion}</p></div>

                    <div className="card_action">
                        <div className="card_action_container">
                            <TextField value={quantity} onChange={changeQuantity} label="cantidad" variant="outlined" inputProps={{
                                style: { textAlign: 'center' },
                            }} InputProps={{
                                endAdornment: (
                                    <AddIcon style={{ cursor: "pointer" }} onClick={() => { changeQuantityIcon(quantity + 1) }} />
                                ),
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <RemoveIcon style={{ cursor: "pointer" }} onClick={() => { changeQuantityIcon(quantity - 1) }} />
                                    </InputAdornment>
                                )
                            }} />
                        </div>
                        {

                            stock <= 0 ? <Button variant="contained" disabled className="card_action_container">No disponible</Button> :
                                <Button variant="contained" className="card_action_container">
                                    AGREGAR AL CARRITO
                                </Button>
                        }
                    </div>
                    <div className="card_favorite">
                        <IconButton>
                            <FavoriteIcon style={isFavorite ? { color: 'red' } : null} />
                        </IconButton>
                    </div>
                    <div className="card_category">
                        <p>categoria: {category.name}</p>
                    </div>
                </div>
            </div>
        </PublicationContent>

    );
}

export default Publication;