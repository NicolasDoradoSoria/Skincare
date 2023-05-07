import { Button } from "@mui/material";
import '../Product.css';
import ProductContainer from "../hooks/ProductContainer";
import Publication from "./Publication";
import ReusableDialog from "./ReusableDialog";

const Product = ({ product }) => {
    const { navigatePublication, open, changedialog, handleButtonClick } = ProductContainer(product)
    return (
        <div className="card_item_product">
            <div className="card_content_img">
                <img src={`http://localhost:4000/${product.images[0].fileName}`} alt="" onClick={navigatePublication} />

                <div className="card_content_button">
                    <Button
                        className="card_preview_button"
                        type="submit"
                        variant="contained"
                        color="secondary"
                        onClick={handleButtonClick}
                    >Vista Previa</Button>
                </div>
                {product.checkedOffer ?
                    <div className="card_content_offer">
                        <p className="offer">
                            Oferta!
                        </p>
                    </div>
                    : null}
            </div>

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
            <ReusableDialog open={open} onClose={changedialog}>
                <Publication id={product._id} />
            </ReusableDialog>
        </div>
    );

}

export default Product;