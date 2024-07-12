"use client";

import { useState, useMemo } from "react";
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

    const imagePaths = [
        [
            "/photography/sports/DSC_0278 copy.webp",
            "/photography/sports/DSC_0367 copy.webp",
            "/photography/sports/DSC_0650 copy.webp",
            "/photography/sports/DSC_0993 copy.webp",
            "/photography/sports/DSC_2780 copy.webp",
            "/photography/sports/DSC_6144 copy.webp",
            "/photography/sports/DSC_6152 copy.webp",
            "/photography/sports/DSC_6678 copy-2.webp",
            "/photography/sports/DSC_7387.webp",
            "/photography/sports/DSC_8555 copy.webp",
            "/photography/sports/DSC_9471.webp",
            "/photography/sports/IMG_2249 copy 2.webp",
            "/photography/sports/IMG_3858 copy 2.webp",
            "/photography/sports/IMG_7851 copy.webp",
            "/photography/sports/IMG_8539 copy.webp",
            "/photography/sports/IMG_8758.webp",
        ],
        [
            "/photography/adventure/DSCF4120 copy 2.webp",
            "/photography/adventure/IMG_2915 2.webp",
            "/photography/adventure/IMG_4397 copy 2.webp",
            "/photography/adventure/IMG_4674 copy 2.webp",
            "/photography/adventure/IMG_5342 copy 2.webp",
            "/photography/adventure/IMG_6411 copy 3.webp",
            "/photography/adventure/IMG_6523 copy 2.webp",
            "/photography/adventure/IMG_6936 copy.webp",
            "/photography/adventure/IMG_6982 copy 2.webp",
            "/photography/adventure/IMG_7101 copy 2.webp",
            "/photography/adventure/IMG_7138 copy 2.webp",
            "/photography/adventure/IMG_7450 copy.webp",
            "/photography/adventure/IMG_7699 copy.webp",
        ],
        [
            "/photography/concerts/DSC_8879 copy.webp",
            "/photography/concerts/DSC_8969 copy.webp",
            "/photography/concerts/DSC_9048 copy 2.webp",
            "/photography/concerts/DSC_9671 copy.webp",
            "/photography/concerts/IMG_0085 copy.webp",
            "/photography/concerts/IMG_0301.webp",
        ],
    ];

    const imageClick = (index) => {
        setCurrentImage(index);
    };

    const arrowForwardClick = () => {
        setCurrentImage((currentImage + 1) % imagePaths[selectedGenre].length);
    };
    const arrowBackwardClick = () => {
        if (currentImage === 0)
            setCurrentImage(imagePaths[selectedGenre].length - 1);
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
                <StyledSinglePhotoImage
                    src={imagePaths[selectedGenre][currentImage]}
                />
                <StyledForwardIosIcon onClick={() => arrowForwardClick()} />
            </StyledSinglePhotoContainer>
        </>
    );

    const sportsImages = useMemo(
        () =>
            imagePaths[0].map((src, index) => (
                <StyledPhoto
                    onClick={() => imageClick(index)}
                    key={`img${index}`}
                    src={src}
                />
            )),
        []
    );

    const adventureImages = useMemo(
        () =>
            imagePaths[1].map((src, index) => (
                <StyledPhoto
                    onClick={() => imageClick(index)}
                    key={`img${index}`}
                    src={src}
                />
            )),
        []
    );

    const concertImages = useMemo(
        () =>
            imagePaths[2].map((src, index) => (
                <StyledPhoto
                    onClick={() => imageClick(index)}
                    key={`img${index}`}
                    src={src}
                />
            )),
        []
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
                    third="concerts"
                />
                <Masonry columns={3}>
                    {selectedGenre === 0 && sportsImages}
                    {selectedGenre === 1 && adventureImages}
                    {selectedGenre === 2 && concertImages}
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
    transition: opacity 0.3s ease-out;
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
