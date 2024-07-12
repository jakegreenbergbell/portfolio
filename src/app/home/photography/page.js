"use client";

import { useState } from "react";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import styled from "styled-components";
import Masonry from "@mui/lab/Masonry";
import bg from "../../../../public/photobackground2.jpeg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SimpleButton from "@/app/components/Button";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ToggleButton from "@/app/components/ToggleButton";

export default function Page() {
    const [currentImage, setCurrentImage] = useState(null);
    const [selectedGenre, setSelectedGenre] = useState(0);

    const images = [
        "/photography/DSC_0278 copy 2.JPG",
        "/photography/DSC_0367 copy 2.jpeg",
        "/photography/DSC_0650 copy 2.JPG",
        "/photography/DSC_0993 copy 2.JPG",
        "/photography/DSC_2780 copy 2.JPG",
        "/photography/DSC_6144 copy 2.JPG",
        "/photography/DSC_6152 copy 2.JPG",
        "/photography/DSC_6678 copy-2 copy.JPG",
        "/photography/DSC_7387 copy.JPG",
        "/photography/DSC_8555 copy 2.JPG",
        "/photography/DSC_8879 copy 2.jpeg",
        "/photography/DSC_8969 copy 2.jpeg",
        "/photography/DSC_9048 copy 3.jpeg",
        "/photography/DSC_9471 copy.JPG",
        "/photography/DSC_9671 copy 2.JPG",
        "/photography/DSCF4120 copy 3.JPG",
        "/photography/IMG_0085 copy 2.jpeg",
        "/photography/IMG_0301 copy.jpeg",
        "/photography/IMG_2249 copy 3.JPG",
        "/photography/IMG_2714 2 copy.JPG",
        "/photography/IMG_2915 2 copy.JPG",
        "/photography/IMG_3858 copy 3.JPG",
        "/photography/IMG_4397 copy 3.JPG",
        "/photography/IMG_4674 copy 3.JPG",
        "/photography/IMG_5342 copy 3.JPG",
        "/photography/IMG_6411 copy 4.jpeg",
        "/photography/IMG_6523 copy 3.jpeg",
        "/photography/IMG_6936 copy 2.jpeg",
        "/photography/IMG_6982 copy 3.jpeg",
        "/photography/IMG_7101 copy 3.jpeg",
        "/photography/IMG_7138 copy 3.jpeg",
        "/photography/IMG_7450 copy 2.jpeg",
        "/photography/IMG_7699 copy 2.jpeg",
        "/photography/IMG_7851 copy 2.jpeg",
        "/photography/IMG_8539 copy 2.jpeg",
        "/photography/IMG_8758 copy.jpeg",
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
            <StyledHighlightOffIcon
                fontSize="large"
                onClick={() => closeButtonClick()}
            />
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
                <StyledHeader />
                <ToggleButton
                    setSelectedGenre={setSelectedGenre}
                    $selectedGenre={selectedGenre}
                    first="sports"
                    second="adventure"
                />
                <Masonry columns={3}>
                    {images.map((src, index) => (
                        <StyledPhoto
                            onClick={() => imageClick(index)}
                            key={`img${index}`}
                            src={src}
                        />
                    ))}
                </Masonry>
                <Footer />
            </Container>
        </main>
    );
}

const StyledHeader = styled(Header)`
    margin-bottom: 30px;
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
    position: fixed;
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
    position: fixed;
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
