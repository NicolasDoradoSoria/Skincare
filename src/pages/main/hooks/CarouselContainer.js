import { useContext, useEffect, useRef} from "react";
import ImagesContext from "../../../context/imagesContext/imagesContext";

const CarouselContainer = () => {
    const slideshow = useRef(null)
    const slideInterval = useRef(null);
    let currentSlide = slideshow.current

    const imagesContext = useContext(ImagesContext);
    const { getImages, images } = imagesContext;

    const following = () => {
        //comprobamos que el slideshow tenga elementos
        if (slideshow.current && (slideshow.current.children.length > 0)) {
            //obtiene el primer elemento del slideshow
            const firstElement = slideshow.current.children[0]

            //establecemos la transicion para el slideshow
            slideshow.current.style.transition = `3500ms ease-out all`

            const slideSize =slideshow.current.children[0].offsetWidth

            //movemos el slideshow
            slideshow.current.style.transform = `translateX(-${slideSize}px)`

            const transition = () => {
                //reiniciamos
                slideshow.current.style.transition = "none"
                slideshow.current.style.transform = `translateX(0)`

                //tomamos el primer elemento y la mandamos al final
                slideshow.current.appendChild(firstElement);
                slideshow.current.removeEventListener("trasitionend", transition)
            }

            //eventlistener para cuando termina la animacions
           slideshow.current.addEventListener("transitionend", transition)

        }
    }

    const previous = () => {
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

        // olvemos a poner el intervalo cuando saquen el cursor del slideshow
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
        images
    }

}

export default CarouselContainer;