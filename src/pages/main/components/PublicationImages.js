import { Button, Grow } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import UsePublication from "../hooks/UsePublication";

/*
************************************************************************************************
PUBLICATIONIMAGES ES EL ENCARGADO DE MOSTRAR LA IMAGEN DE PUBLICACION, LA MISMA NECESITA:

A- LA IMAGEN QUE SE VA A RENDERIZAR
B- EL CONTADOR DE LA IMAGEN
C- LA FUNCION DEL EVENTO ONCLICK QUE ES PARA CAMBIAR DE IMAGEN EN LA VISTA PRELIMINAR
D- LA FUNCION DEL EVENTO ONCLICK QUE ES PARA CAMBIAR DE IMAGEN EN LA BOTONERA DE LA IMAGEN
E- EL HOOK QUE SIRVE PARA AGREGAR OPACIDAD AL PASAR EL MOUSE
F- EL HOOK DE LA TRANSICION DE LA IMAGEN


************************************************************************************************
*/


const PublicationImages = () => {
    const { images, activeStep, smallImage, cardMediaStyle, checked, handleNextAndBack } = UsePublication()

    return (
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
            
                <Button size="small" variant="raised" onClick={() => handleNextAndBack(-1)} disabled={activeStep === 0} >
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
    );
}

export default PublicationImages;