import "../Styles.css";
import styled from "styled-components"
import { ReactComponent as LeftArrow } from "../../../img/iconmonstr-angel-left-thin.svg"
import { ReactComponent as RightArrow } from "../../../img/iconmonstr-angel-right-thin.svg"
import UseCarousel from '../hooks/UseCarousel'
import Banner from "../components/Banner";
import UseContext from "../../../hooks/UseContext";
/*
************************************************************************************************
ESTE COMPONENTE ES LA VISTA QUE SE ENCARGA DE MOSTRAR EL CAROUSEL LA MISMA NECESITA DE LA LOGICA 
A- following
B- previous
C- slideshow

TAMBIEN NECESITA LAS IMAGENES QUE VIENEN DEL CONTEXT

************************************************************************************************
*/
const Carousel = () => {
    const { following, previous, slideshow } = UseCarousel()
   const { images } = UseContext()
    
    return (
        <div className='slideshow'>
            <div className='carrousel'>
                <MainContainer>
                    <SlideContainer ref={slideshow}>
                        {
                            images.map((groupImages, index) => (
                                <Banner groupImages={groupImages} key={index} />
                            ))
                        }
                    </SlideContainer>
                    <Controller>
                        <Button onClick={previous}>
                            <LeftArrow />
                        </Button>
                        <Button right onClick={following}>
                            <RightArrow />
                        </Button>
                    </Controller>
                </MainContainer>
            </div>
        </div>
    )
}

const MainContainer = styled.div`
    position: relative;
`;

const SlideContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    
`;

const Controller = styled.div`
position: absolute;
top: 0;
z-index: 20;
width: 100%;
height: 100%;
pointer-events: none;
`;
const Button = styled.button`
pointer-events: all;
background: none;
border: none;
cursor: pointer;
outline: none;
width: 50px;
height: 100%;
text-align: center;
position: absolute;
transition: .3s ease all;
    &:hover {
        background : rgba(0,0,0, .2);
        path {
            fill: #fff;
        }
    }

    path {
        filter: ${props => props.right ? "drop-shadow(-2px 0px  0px #fff)" : "drop-shadow(2px 0px  0px #fff)"};
    }

    ${props => props.right ? "right: 0" : "left: 0"}
`;

export default Carousel