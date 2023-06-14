import { Button} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import '../Styles.css';
import UseContext from "../../../hooks/UseContext";
import { useContext } from "react";
import ImageContext from "../context/addEditContext";

const ProductRow = ({ product }) => {
    const { deleteProduct } = UseContext()

    const imageContext = useContext(ImageContext);
    const { onClickEditProduct} = imageContext;
    return (
        <>
            <button className="cell-more-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" rokewidth="2" rokelinecap="round" rokelinejoin="round" className="feather feather-more-vertical">
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" />
                </svg>
            </button>
            <div className="product-cell image">
                <img src={`http://localhost:4000/${product.images[0].fileName}`} alt="product" />
                <span>{product.name}</span>
            </div>
            <div className="product-cell category">
                <span className="cell-label">Category:</span>
                {product.category.name}
            </div>
            <div className="product-cell status-cell">
                <span className="cell-label">descripcion:</span>
                <span>{product.descripcion}</span>
            </div>
            <div className="product-cell stock"><span className="cell-label">Stock:</span>{product.stock}</div>
            <div className="product-cell price"><span className="cell-label">Price:</span>{product.price}</div>
            <div className="product-cell action">
                <span className="cell-label">Acciones:</span>
                <Button color="success" variant="contained" onClick={() => onClickEditProduct(product._id)}><EditIcon sx={{ width: "20px", height: "20px" }} /></Button>
                <Button color="error" variant="contained" onClick={() => deleteProduct(product._id)}><DeleteIcon sx={{ width: "20px", height: "20px" }} /></Button>
            </div>
            
        

        </>
    );
}

export default ProductRow;