import { Badge, Button, TextField } from '@mui/material';
import React from 'react';
import '../Styles.css';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NavbarContainer from '../hooks/NavbarContainer';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Dropdown from './Dropdown';

const adminPath = [
    {
        name: "Lista de Productos",
        path: "todos-Productos",
    },
    {
        name: "Agregar Producto",
        path: "agregar-producto",
    },
    {
        name: "Administrador Carrousel Principal",
        path: "administrador-Carrusel-Principal",
    },
    {
        name: "Agregar categoria",
        path: "agregar-categoria",
    },
    {
        name: "Pedidos",
        path: "order",
    },
];

const Navbar = () => {
    const {navigateToLogin, signOff, authenticated, isAdmin, click, handleClick, onMouseEnterAdmin, onMouseLeaveAdmin, dropdownAdmin, 
        categories, dropdownCategory, onMouseLeaveCategory, onMouseEnterCategory } = NavbarContainer()
    return (
        <header className='header'>
            {/* si no esta despleglado en modo mobile muestra MenuIcon si esta desplegablo muesta el CloseIcon esto solo sirve para modo mobile */}
            <div className="menu-icon" onClick={handleClick}>
                {click ? <CloseIcon /> : <MenuIcon />}
            </div>

            <div className={click ? "navbar_container active" : "navbar_container"} >
                <div className='navbar_item'>
                    <Link to='/' className='navbar_link' onClick={handleClick}>Inicio</Link>
                </div>
                <div className='navbar_item icon' onMouseEnter={onMouseEnterCategory} onMouseLeave={onMouseLeaveCategory}>
                    <Link href='/' className='navbar_link' onClick={handleClick}>Categoria</Link>
                    <div className='navbar_icon'>
                        <ArrowDropDownIcon />
                    </div>
                    {dropdownCategory &&
                        <ul className={click ? 'navbar_dropdown dropdown_clicked' : "navbar_dropdown"}>
                            {
                                categories.map((category,i) => <Dropdown name={category.name} path={category.path} key={i}/>)
                            }
                        </ul>
                    }
                </div>
                {authenticated ?
                    <>
                        <div className='navbar_item'>
                            <Link href='/' className='navbar_link' onClick={handleClick}>Perfil</Link>
                        </div>
                        <div className='navbar_item'>
                            <Link href='/' className='navbar_link' onClick={handleClick}>Carrito</Link>
                        </div>
                        <div className='navbar_item'>
                            <Link href='/' className='navbar_link' onClick={handleClick}>Favoritos</Link>
                        </div>
                        {isAdmin && <div className='navbar_item icon' onMouseEnter={onMouseEnterAdmin} onMouseLeave={onMouseLeaveAdmin}>
                            <Link href='/' className='navbar_link' onClick={handleClick}>Administrador</Link>
                            <div className='navbar_icon'>
                                <ArrowDropDownIcon />
                            </div>
                            {dropdownAdmin &&
                                <ul className={click ? 'navbar_dropdown.dropdown_clicked' : "navbar_dropdown"}>
                                    {
                                        adminPath.map((path, i) => <Dropdown name={path.name} path={path.path} key={i}/>)
                                    }
                                </ul>
                            }
                        </div>}
                        <div className='navbar_item'>
                            <div className='navbar_action'>
                                <Button variant="contained" type='button' className="navbar" onClick={signOff}>cerrar Sesion</Button>
                            </div>
                        </div>
                        <div className='navbar_item'>
                            <Badge badgeContent={4} color="error" className='shopping'>
                                <div className="navbar_badge_icon">
                                    <ShoppingCartIcon />
                                </div>
                            </Badge>
                        </div>
                    </>
                    : <div className='navbar_item'>
                        <div className='navbar_action'>
                            <Button variant="contained" type='button' className="navbar" onClick={navigateToLogin}>Inciar Secion</Button>
                        </div>
                    </div>}
                <div className='navbar_item'>
                    <div className='navbar_input'>
                        <TextField label="Buscar Producto" variant="outlined" fullWidth />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;