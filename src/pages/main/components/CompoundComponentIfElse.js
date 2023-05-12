import { Children, cloneElement } from 'react'
/*
********************************

1- ESTE COMPONENTE ES PARA EVITAR EL IF EN EL RENDERIZADO FUNCIONA EN:

A- PRODUCT
B- LISTPRODUCT


NECESITA QUE LE PASEMOS UN VALUE QUE TIENE QUE SER UN BULLEANO
********************************
*/
export const If = ({ value, children }) => {

    return Children.map(children, (child) => (
        cloneElement(child, { value })
    ))
}

export const Then = ({ value, children }) => {
    return !value ? <>{children}</> : <></>
}


export const Else = ({ value, children }) => {
    return value ? <>{children}</> : <></>
}



