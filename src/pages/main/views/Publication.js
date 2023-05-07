import { Button, Grow, IconButton, InputAdornment, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import '../Publication.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FavoriteIcon from '@mui/icons-material/Favorite';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PublicationContainer from "../hooks/PublicationContainer";
const Publication = ({id}) => {
const {
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
    cardMediaStyle
} = PublicationContainer(id)

if(!name) return null
    return (
        <div className="card_container">
            <div className="card_publication">
                <div className="card_link">
                    <Link to={"/"} className="card_link_title" style={{ textDecoration: 'none', color: "black", fontSize: 20 }}>Inicio</Link>
                    <p> /</p>
                    <Link to={"/"} className="card_link_title" style={{ textDecoration: 'none', color: "black", fontSize: 20 }}> {category.name} </Link>
                    <p> / {name}</p>

                </div>
                <div className="card_center">
                    <div className="card_left_box">
                        <div className="card_preview_container_img">
                            {images.map((img, i) => (
                                <img
                                    src={`http://localhost:4000/${img.fileName}`}
                                    alt={images[activeStep].fileName}
                                    key={i}
                                    onClick={() => smallImage(i)}
                                    style={activeStep === i ? cardMediaStyle : null}
                                    className={"card_preview_img"}
                                />
                            ))}
                        </div>
                        <div>
                            <Grow in={checked} timeout={1000}>
                                <img
                                    src={`http://localhost:4000/${images[activeStep].fileName}`}
                                    alt={images[activeStep].fileName}
                                    className="card_main_img"
                                    key={activeStep}
                                />
                            </Grow>

                            <div className="card_main_bottom_bar">
                                <Button size="small" variant="raised" onClick={() => handleNextAndBack(-1)} disabled={activeStep === 0} disableElevation >
                                    <KeyboardArrowLeftIcon />
                                    BACK
                                </Button>
                                <div className="card_page"><p>{activeStep + 1}/{images.length}</p></div>
                                <Button size="small" variant="raised" onClick={() => handleNextAndBack(1)} disabled={activeStep === images.length - 1} >
                                    Next
                                    <KeyboardArrowRightIcon />
                                </Button>
                            </div>
                        </div>

                    </div>
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
                                    ), startAdornment: (
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
                            <IconButton >
                                <FavoriteIcon style={isFavorite ? { color: 'red' } : null} />
                            </IconButton>
                        </div>
                        <div className="card_category">
                            <p>categoria: {category.name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Publication;