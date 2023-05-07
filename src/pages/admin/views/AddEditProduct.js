import { Button, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import SnackBarContainer from "../../../snackbar/hooks/SnackBarContainer";

import '../Styles.css';
import UseAddEditProduct from "../hooks/UseAddEditProduct";

const AddEditProduct = () => {

    const {
        productSubmit, name, price, descripcion, originalPrice, categories,
        productButtonDisabled, productChange, checkedOfferChange, checkedOffer, selectedImage, images,
        imageButtonDisabled, selectImage, imageChange, deleteImage } = UseAddEditProduct()

    return (
        <div className="product_container">
            <div className="product_card">

                <h1>Agregar Producto</h1>
                <form className="product_form" onSubmit={productSubmit}>
                    {/* NOMBRE */}
                    <div className="product_item">
                        <TextField onChange={productChange} value={name} variant="outlined" label="nombre del producto" name="name" fullWidth required />
                    </div>
                    {/* PRECIO */}
                    <div className="product_item">
                        <TextField onChange={productChange} value={price} variant="outlined" name="price" fullWidth required label="Precio" type="number" InputProps={{ inputProps: { min: 0 } }} />
                    </div>
                    {/* DESCRIPCION */}
                    <div className="product_item">
                        <TextField onChange={productChange} value={descripcion} variant="outlined" label="Descripcion" multiline name="descripcion" fullWidth required />
                    </div>
                    {/* STOCK */}
                    <div className="product_item">
                        <TextField onChange={productChange} variant="outlined" label="stock" name="stock" fullWidth required type="number" InputLabelProps={{
                            shrink: true,
                        }}
                            defaultValue="1"
                            inputProps={{ min: "1" }}
                        />
                    </div>
                    {/* CATEGORIA */}
                    <div className="product_item">
                        <FormControl fullWidth>
                            <InputLabel id="Category">Categoria</InputLabel>
                            <Select
                                onChange={productChange}
                                defaultValue=""
                                id="grouped-native-select"
                                name="category"
                            >
                                {categories.map(category => (
                                    <MenuItem value={category._id} key={category._id} >{category.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    {/* SUBIR IMAGBEN */}
                    <div className="product_item">
                        <Button variant="contained" component="label" color="primary">
                            Subir
                            <input hidden accept="image/*" name="img" type="file" onChange={imageChange} />
                        </Button>
                    </div>
                    {/* IMAGEN PREVIA */}
                    <div className="product_item_col2">
                        {
                            images.length ?
                                <div className="product_upload_img">
                                    {
                                        images.map((image, i) =>
                                            <div key={i} className={(selectedImage === image) ? "product_select_image" : null}>
                                                <Button onClick={() => selectImage(image)}>
                                                    <img src={URL.createObjectURL(image)} alt="uploaded_image" className="addEdditProduct_img" />
                                                </Button>
                                            </div>
                                        )
                                    }
                                </div>
                                : <h3>No hay Imagenes seleccionadas</h3>
                        }
                    </div>
                    {/* ELIMINAR IMAGEN */}
                    <div className="product_item">
                        <Button type="button" variant="contained" disabled={imageButtonDisabled()} onClick={() => deleteImage()}>Eliminar</Button>
                    </div>
                    {/* CHECKBOX DE SI TIENE OFERTA O NO */}
                    <div className="product_item_col3">
                        <FormControlLabel control={<Checkbox name="checkedOffer" checked={checkedOffer} onChange={checkedOfferChange} />} label="Oferta" />
                    </div>
                    {/* PRECIO ORIGINAL se activa si es true el checkedOffer */}
                    {checkedOffer ?
                        <div className="product_item_col3">
                            <TextField value={originalPrice} onChange={productChange} variant="outlined" label="precio original" type="number" InputProps={{ inputProps: { min: price } }} name="originalPrice" fullWidth required />
                        </div>
                        : <div className="product_item"></div>}
                    <div className="product_item_col4">
                        <Button variant="contained" type="submit" color="primary" disabled={productButtonDisabled()}>
                            Agregar Producto
                        </Button>
                    </div>
                </form>
            </div>
            <SnackBarContainer />
        </div>);
}

export default AddEditProduct;