import { Button, TextField, Typography } from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";
import '../Styles.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginContainer from "../hooks/LoginContainer";
import SnackBarContainer from '../../../snackbar/hooks/SnackBarContainer'
const Login = () => {
    const { changeInput, loginButtonDisabled, onSubmit } = LoginContainer()

    return (
        <div className="container">
            <form className="form" onSubmit={onSubmit}>
                <div className="avatar_Container">
                    <AccountCircleIcon className="avatar" color="error" />
                </div>
                <div>
                    <h3 className="title">Iniciar Sesion</h3>
                </div>
                <div className="textField_container">
                    <TextField label="direcion de email" name="email" variant="outlined" required autoComplete="email" fullWidth style={{ maxWidth: "90%" }} onChange={changeInput} />
                </div>
                <div className="textField_container">
                    <TextField label="clave" variant="outlined" name="password" required type="password" autoComplete="current-password" fullWidth style={{ maxWidth: "90%" }} onChange={changeInput} />
                </div>
                <div className="button_container">
                    <Button variant="contained" type="submit" fullWidth style={{ maxWidth: "90%" }} disabled={loginButtonDisabled()}>INICIAR SESION</Button>
                </div>
                <div className="link_container">
                    <Link to="#" className="link">
                        te olvidaste la contraseña?
                    </Link>
                    <Link to={"/nueva-cuenta"} className="link">
                        {"no tienes cuenta? Registrate"}
                    </Link>
                </div>
                <div className="copyright">

                    <Typography variant="body2" color="textSecondary" align="center">
                        {'Copyright © '}
                        <Link color="inherit" href="https://material-ui.com/">
                            Your Website
                        </Link>{' '}
                        {new Date().getFullYear()}
                        {'.'}
                    </Typography>
                </div>

                <SnackBarContainer />
            </form>
        </div>
    );
}

export default Login;