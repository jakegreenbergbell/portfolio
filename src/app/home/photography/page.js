"use client";

import { useState } from "react";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import styled from "styled-components";
import Masonry from "@mui/lab/Masonry";
import bg from "../../../../public/photobackground2.jpeg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export default function Page() {
    const [currentImage, setCurrentImage] = useState(null);

    const images = [
        "/photography/7O3A5284.jpg",
        "/photography/DSC_0215.jpg",
        "/photography/DSC_1566.jpg",
        "/photography/DSC_2871-Enhanced-NR_1.jpg",
        "/photography/DSC_2884.jpg",
        "/photography/DSC_4602-Enhanced-NR.jpg",
        "/photography/DSC_5762.jpg",
        "/photography/DSC_5981.jpg",
        "/photography/DSC_6318.jpg",
        "/photography/JC1.jpeg",
        "/photography/JC5.jpeg",
        "/photography/JC21.jpeg",
        "/photography/JSC_0290.jpg",
        "/photography/JSC_0447-Enhanced-NR.jpg",
    ];

    const imageClick = (index) => {
        setCurrentImage(index);
    };

    const arrowForwardClick = () => {
        setCurrentImage((currentImage + 1) % images.length);
    };
    const arrowBackwardClick = () => {
        if (currentImage === 0) setCurrentImage(images.length - 1);
        else setCurrentImage(currentImage - 1);
    };

    const closeButtonClick = () => {
        setCurrentImage(null);
    };

    const focusImage = (
        <>
            <StyledHighlightOffIcon onClick={() => closeButtonClick()} />
            <StyledSinglePhotoContainer>
                <StyledArrowBackIosIcon onClick={() => arrowBackwardClick()} />
                <StyledSinglePhotoImage src={images[currentImage]} />
                <StyledForwardIosIcon onClick={() => arrowForwardClick()} />
            </StyledSinglePhotoContainer>
        </>
    );

    return (
        <main>
            {currentImage !== null ? focusImage : <></>}
            <Container
                $currentImage={currentImage}
                style={{
                    backgroundImage: `url(${bg.src})`,
                    width: "100%",
                    height: "100%",
                }}
            >
                <Header />
                <StyledMasonry columns={3}>
                    {images.map((src, index) => (
                        <StyledPhoto
                            onClick={() => imageClick(index)}
                            key={`img${index}`}
                            src={src}
                        />
                    ))}
                </StyledMasonry>
                <Footer />
            </Container>
        </main>
    );
}

const StyledMasonry = styled(Masonry)`
    margin-top: 30px;
`;

const StyledArrowBackIosIcon = styled(ArrowBackIosIcon)`
    cursor: pointer;
    z-index: 1;
`;

const StyledForwardIosIcon = styled(ArrowForwardIosIcon)`
    cursor: pointer;
    z-index: 1;
`;

const StyledHighlightOffIcon = styled(HighlightOffIcon)`
    cursor: pointer;
    position: absolute;
    z-index: 2;
    top: 20px;
    height: 30px;
    width: 30px;
    right: 20px;
`;

const StyledSinglePhotoContainer = styled.div`
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    position: absolute;
    padding: 30px;
    gap: 20px;
    flex-grow: 1;
    flex-shrink: 1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`;

const StyledSinglePhotoImage = styled.img`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const StyledPhoto = styled.img`
    transition-property: opacity;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
    &:hover {
        opacity: 0.5;
        cursor: pointer;
    }
`;

const Container = styled.div`
    opacity: ${(props) => (props.$currentImage != null ? "0.5" : "1")};
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    padding-left: 3rem;
    padding-right: 3rem;
    padding-top: 6rem;
    padding-bottom: 6rem;
`;
