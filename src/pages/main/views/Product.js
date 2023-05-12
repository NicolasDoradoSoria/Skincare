import { Button } from "@mui/material";
import UseProduct from "../hooks/UseProduct";
import { If, Then } from "../components/CompoundComponentIfElse";
import Publication from "./Publication";
import ReusableDialog from '../../../components/ReusableDialog'
/*
************************************************************************************************
ESTA VISTA ES LA ENCARGADA DE MOSTRAR EL PRODUCTO LA MISMA NECESITA QUE SE LO PASE POR PROPS

TRAE DE LA DE LA LOGICA LO SIGUIENTE:
A- navigatePublication QUE ES PARA QUE LE PERMITA NAVEGAR A LA PUBLICACION
B- handleButtonClick QUE SE ECNARGA DE CAMBIAR DE IMAGEN EN LA LISTA PREVIA
C- open ES PARA PERMITIR ABRIR EL COMPONENTE PUBLICATION COMO DIALOG
D- changeDialog ES PARA CERRAR EL DIALOG

ESTE COMPONENTE MANDA A LLAMAR A EL COMPONENTE IF THEN ELSE QUE SON LOS ENCARGADOS DE HACER EL IF DEL LOADING
Y POR SUPUESTO LA PUBLICACION
************************************************************************************************
*/
const Product = ({children, product}) => {

    const { navigatePublication, handleButtonClick,  open, changeDialog  } = UseProduct()

    return ( 
        <div className="card_item_product">
            <div className="card_content_img">
                <img src={`http://localhost:4000/${product.images[0].fileName}`} alt="" onClick={() => navigatePublication(product._id)} />

                <div className="card_content_button">
                    <Button
                        className="card_preview_button"
                        type="submit"
                        variant="contained"
                        color="secondary"
                        onClick={handleButtonClick}
                    >Vista Previa</Button>
                </div>
                <If value={!product.checkedOffer} >
                    <Then>
                        <div className="card_content_offer">
                            <p className="offer">
                                Oferta!
                            </p>
                        </div>
                    </Then>
                </If>
            </div>
            {children}
            <ReusableDialog open={open} onClose={changeDialog}>
                <Publication id={product._id} />
            </ReusableDialog>
    |</div>
     );
}
 
export default Product;