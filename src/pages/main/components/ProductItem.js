import { Button } from "@mui/material";
import '../Product.css';
import Product from "../views/Product";

/*
************************************************************************************************
ESTE COMPONENTE ES UN COMPONENTE HIJO DE PRODUCT

SE ENCARGA DE MOSTRAR TODO LO QUE ESTA ABAJO DE LA IMAGEN QUE EN ESTE CASO SERIA:
A- NOMBRE DEL PRODUCTO
B- DESCRIPCION DEL PRODUCTO
C- EL PRECIO ORIGINAL
D- EL PRECIO ACTUAL DEL PRODUCTO
E- UN BOTON PARA AGREGAR EL PRODUCTO


************************************************************************************************
*/

const ProductItem = ({ product }) => {
    return (
        <Product product={product}>
            <div className="card_product_title">
                <h2>{product.name}</h2>
            </div>
            <div className="card_content_price">
                <div className="card_original_price">
                    <p>${product.originalPrice}</p>
                </div>
                <div className="card_product_price">
                    <h2>${product.price}</h2>
                </div>
            </div>
            <div className="card_button">
                <Button variant="contained">
                    AGREGAR
                </Button>
            </div>
        </Product>
    );

}

export default ProductItem;