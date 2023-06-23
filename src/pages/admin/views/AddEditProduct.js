import { Button, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select } from "@mui/material";
import '../Styles.css';
import { If, Then } from "../../../components/CompoundComponentIfElse";
import ProductTextField from "../../../components/ProductTextField";
import Images from "../components/Images";
import { useContext } from "react";
import ProductManagementContext from "../context/ProductManagementContext";
import ButtonReusable from "../../../components/ButtonReusable";
const AddEditProduct = () => {

    const productManagementContext = useContext(ProductManagementContext);
    const { productButtonDisabled, imageButtonDisabled, productSubmit, name, price, descripcion, originalPrice, categories, category,
        productChange, checkedOfferChange, checkedOffer,
        deleteImage, product } = productManagementContext;

    return (

        <div className="product_container">
            <div className="product_card">
                {!product ? <h1>Agregar Producto</h1> : <h1>Editar Producto</h1>}
                <form className="product_form" onSubmit={productSubmit}>
                    {/* NOMBRE */}
                    <ProductTextField productChange={productChange} value={name} label="nombre del producto" name="name" />

                    {/* PRECIO */}
                    <ProductTextField productChange={productChange} type="number" value={price} label="Precio" name="price" inputProps={{ inputProps: { min: 0 } }} />

                    {/* DESCRIPCION */}
                    <ProductTextField productChange={productChange} value={descripcion} label="Descripcion" name="descripcion" />

                    {/* STOCK */}
                    <ProductTextField productChange={productChange} label="Stock" name="stock" type="number" inputProps={{ inputProps: { min: 1 } }} defaultValue="1" />

                    {/* CATEGORIA */}
                    <div className="product_item">
                        <FormControl fullWidth>
                            <InputLabel id="Category">Categoria</InputLabel>
                            <Select
                                onChange={productChange}
                                defaultValue=""
                                id="grouped-native-select"
                                name="category"
                                value={category}
                            >
                                {categories.map(category => (
                                    <MenuItem value={category._id} key={category._id} >{category.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>

                    {/* CARGA Y MOSTRAR IMAGENES */}
                    <Images />
                    {/* ELIMINAR IMAGEN */}
                    <div className="product_item">
                        <Button type="button" variant="contained" disabled={imageButtonDisabled()} onClick={() => deleteImage()}>Eliminar</Button>
                    </div>
                    {/* CHECKBOX DE SI TIENE OFERTA O NO */}
                    <div className="product_item">
                        <FormControlLabel control={<Checkbox name="checkedOffer" checked={checkedOffer} onChange={checkedOfferChange} />} label="Oferta" />
                    </div>
                    {/* PRECIO ORIGINAL se activa si es true el checkedOffer */}
                    <If value={!checkedOffer}>
                        <Then>
                            <ProductTextField value={originalPrice} productChange={productChange} label="precio orginal" type="number" name="originalPrice" inputProps={{ inputProps: { min: price } }} />
                        </Then>
                    </If>
                    <ButtonReusable type="submit" disabled={productButtonDisabled()}>
                        {!product ? "Agregar Producto" : "actualizar Producto"}
                    </ButtonReusable>

                </form>
            </div>
        </div>


    );
}

export default AddEditProduct;