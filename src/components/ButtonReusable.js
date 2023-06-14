import { Button } from "@mui/material";

const ButtonReusable = ({children, disabled, type="button", color="primary"}) => {

    
    return (
    <div className="product_item">
        <Button variant="contained" type={type} color={color} disabled={disabled}>
            {children}
        </Button>
    </div>);
}

export default ButtonReusable;