import "../Styles.css";
import styled from "styled-components"
import { ReactComponent as LeftArrow } from "../../../img/iconmonstr-angel-left-thin.svg"
import { ReactComponent as RightArrow } from "../../../img/iconmonstr-angel-right-thin.svg"
import CarouselContainer from '../hooks/CarouselContainer'
function Banner({ groupImages }) {
    return (
        groupImages.files.map(singleImage => {
            return <Slide key={singleImage._id}>
                <a href="http://localhost:3000/">
                        <img src={`http://localhost:4000/${singleImage.fileName}`} alt=''></img>
                </a>
            </Slide>
        })

    )
}


const Carousel = () => {
    const {following, previous, slideshow, images} = CarouselContainer()
    return (
        <div className='slideshow'>
            <div className='carrousel'>
                <MainContainer>
                    <SlideContainer ref={slideshow}>
                        {
                            images.map((groupImages, index) => {
                                return <Banner groupImages={groupImages} key={index} />
                            })
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

const Slide = styled.div`
    min-width: 100%;
    overflow: hidden;
    transition: .3s ease all;
    z-index: 10;
    max-height: 500px;
    position: relative;

    @media screen and (max-width: 700px){
        max-height: 200px;    
    }


    img {
        width: 100%;
        vertical-align: top;
    height: 500px

    }
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