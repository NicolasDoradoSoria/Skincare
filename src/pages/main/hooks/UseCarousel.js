import { useEffect, useRef } from "react";
import UseContext from "../../../hooks/UseContext";
/*
************************************************************************************************
ESTE CUSTOM HOOK ES EL ENCARGADO DE LA LOGICA DEL CAROUSEL LA MISMA SE ENCARGA DE LA MANIPULACION DE LA IMAGEN

EN LA MISMA SE INICIALIZAN LOS SIGUIENTES useRef
A- slideshow COMO NULL
B- slideInterval COMO NULL

TAMBIERN LLAMO A getImages QUE ES UN CONTEXT QUE VIENE DESDE UseContext 
EN EL useEffect LLAMO A GETIMAGES A GETIMAGES QUE HACE QUE CARGE LAS IMAGENES EN EL CAROUSEL Y MANIPULO LOS INTERVALOS QUE SE VAN A MOSTRAR ENTRE UNA Y OTRA

************************************************************************************************
*/
const UseCarousel = () => {
    const slideshow = useRef(null)
    const slideInterval = useRef(null);

    const { getImages } = UseContext();

    const following = () => {
        //comprobamos que el slideshow tenga elementos
        if (slideshow.current && (slideshow.current.children.length > 0)) {
            //obtiene el primer elemento del slideshow
            const firstElement = slideshow.current.children[0]

            //establecemos la transicion para el slideshow
            slideshow.current.style.transition = `3500ms ease-out all`

            const slideSize = slideshow.current.children[0].offsetWidth

            //movemos el slideshow
            slideshow.current.style.transform = `translateX(-${slideSize}px)`

            const transition = () => {
                //reiniciamos
                slideshow.current.style.transition = "none"
                slideshow.current.style.transform = `translateX(0)`

                //TOMAMOS el primer elemento y la mandamos al final
                slideshow.current.appendChild(firstElement);
                slideshow.current.removeEventListener("trasitionend", transition)
            }

            //eventlistener para cuando termina la animacions
            slideshow.current.addEventListener("transitionend", transition)

        }
    }

    const previous = () => {
        let currentSlide = slideshow.current

        if (slideshow.current.children.length > 0) {
            //obtiene el primer elemento del slideshow
            const index = currentSlide.children.length - 1
            const ultimoElemento = currentSlide.children[index]
            currentSlide.insertBefore(ultimoElemento, currentSlide.firstChild)

            currentSlide.style.transicion = "none"

            const slideSize = currentSlide.children[0].offsetWidth
            currentSlide.style.transform = `translateX(-${slideSize}px)`

            setTimeout(() => {
                currentSlide.style.transicion = "300ms ease-out all"
                currentSlide.style.transform = `translateX(0)`
            }, 30)

        }
    }
    useEffect(() => {
        getImages()
        slideInterval.current = setInterval(() => {
            following();
        }, 6000);
        // Eliminamos los intervalos
        slideshow.current.addEventListener('mouseenter', () => {
            clearInterval(slideInterval.current);
        });

        // Volvemos a poner el intervalo cuando saquen el cursor del slideshow
        slideshow.current.addEventListener('mouseleave', () => {
            slideInterval.current = setInterval(() => {
                following();
            }, 5000);
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        slideshow,
        following,
        previous,
    }

}

export default UseCarousel;