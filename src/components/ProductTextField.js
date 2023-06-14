import { TextField } from "@mui/material";

const ProductTextField = ({ type="text", value, label, name, productChange, inputProps, defaultValue  }) => {

    return (
        <div className="product_item">
            <TextField type={type} value={value} onChange={productChange}  variant="outlined" label={label} name={name} fullWidth required InputProps={inputProps} defaultValue={defaultValue} />
        </div>
    );
}

export default ProductTextField;