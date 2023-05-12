import styled from "styled-components"

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


export default Banner

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