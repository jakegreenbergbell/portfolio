"use client";

import { useState, useMemo } from "react";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import styled from "styled-components";
import { motion } from "framer-motion";
import bg from "../../../../public/photobackground2.webp";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Masonry from "react-responsive-masonry";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ToggleButton from "@/app/components/ToggleButton";

export default function Page() {
    const [currentImage, setCurrentImage] = useState(null);
    const [selectedGenre, setSelectedGenre] = useState(0);

    const imagePaths = [
        [
            "/photography/sports/DSC_2780 copy (3) copy.webp",
            "/photography/sports/IMG_3858 copy 3.webp",
            "/photography/sports/DSC_7387 (2) copy.webp",
            "/photography/sports/DSC_0650 copy (2) copy.webp",
            "/photography/sports/DSC_0278 copy (2) copy.webp",
            "/photography/sports/DSC_0367 copy (2) copy.webp",
            "/photography/sports/IMG_7851 copy 2.webp",
            "/photography/sports/DSC_8555 copy (2) copy.webp",
            "/photography/sports/DSC_9471 (1) copy.webp",
            "/photography/sports/DSC_6144 copy (2) copy.webp",
            "/photography/sports/DSC_0993 copy (2) copy.webp",
            "/photography/sports/DSC_6152 copy (2) copy.webp",
            "/photography/sports/IMG_8539 copy 2.webp",
            "/photography/sports/DSC_6678 copy-2 (2) copy.webp",
            "/photography/sports/IMG_2249 copy 2 (1) copy.webp",
        ],
        [
            "/photography/adventure/DSCF4120 copy 2 (2) copy.webp",
            "/photography/adventure/IMG_2714 2 copy.webp",
            "/photography/adventure/IMG_2915 2 (1) copy.webp",

            "/photography/adventure/IMG_4397 copy 3.webp",
            "/photography/adventure/IMG_7101 copy 3.webp",
            "/photography/adventure/IMG_7450 copy 2.webp",
            "/photography/adventure/IMG_6411 copy 4.webp",
            "/photography/adventure/IMG_4674 copy 3.webp",
            "/photography/adventure/IMG_6982 copy 3.webp",
            "/photography/adventure/IMG_5342 copy 3.webp",
            "/photography/adventure/IMG_6936 copy 2.webp",
            "/photography/adventure/IMG_6523 copy 3.webp",
            "/photography/adventure/IMG_7699 copy 2.webp",
            "/photography/adventure/IMG_7138 copy 3.webp",
        ],
        [
            "/photography/concerts/DSC_8879 copy (2) copy.webp",
            "/photography/concerts/IMG_0085 copy (1) copy.webp",
            "/photography/concerts/DSC_8969 copy (2) copy.webp",
            "/photography/concerts/IMG_0301 (1) copy.webp",
            "/photography/concerts/DSC_9048 copy 2 (2) copy.webp",
            "/photography/concerts/DSC_9671 copy (1) copy.webp",
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

    const delayTimes = Array.from(Array(15).keys()).map((elem) => elem * 0.1);

    const [numberTimesGenreSelected, setNumberTimesGenreSelected] = useState({
        0: 1, // starts as 1 since page loads on it
        1: 0,
        2: 0,
    });

    const sportsImages = useMemo(
        () =>
            imagePaths[0].map((src, index) => (
                <StyledPhoto
                    key={`sports${index}`}
                    initial={
                        numberTimesGenreSelected[0] > 1
                            ? { opacity: 1 }
                            : { opacity: 0 }
                    }
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: delayTimes[index] }}
                    whileHover={{
                        opacity: 0.5,
                        transition: { duration: 0.3 },
                    }}
                    onClick={() => imageClick(index)}
                    src={src}
                />
            )),
        [numberTimesGenreSelected, setNumberTimesGenreSelected]
    );

    const adventureImages = useMemo(
        () =>
            imagePaths[1].map((src, index) => (
                <StyledPhoto
                    key={`adventure${index}`}
                    initial={
                        numberTimesGenreSelected[1] > 1
                            ? { opacity: 1 }
                            : { opacity: 0 }
                    }
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: delayTimes[index] }}
                    whileHover={{
                        opacity: 0.5,
                        transition: { duration: 0.3 },
                    }}
                    onClick={() => imageClick(index)}
                    src={src}
                />
            )),
        [numberTimesGenreSelected, setNumberTimesGenreSelected]
    );

    const concertImages = useMemo(
        () =>
            imagePaths[2].map((src, index) => (
                <StyledPhoto
                    key={`concert${index}`}
                    initial={
                        numberTimesGenreSelected[2] > 1
                            ? { opacity: 1 }
                            : { opacity: 0 }
                    }
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: delayTimes[index] }}
                    whileHover={{
                        opacity: 0.5,
                        transition: { duration: 0.3 },
                    }}
                    onClick={() => imageClick(index)}
                    src={src}
                />
            )),
        [numberTimesGenreSelected, setNumberTimesGenreSelected]
    );

    return (
        <main>
            {currentImage !== null ? focusImage : <></>}
            <Container
                $currentImage={currentImage}
                style={{
                    backgroundImage: `url(${bg.src})`,
                    width: "100vw",
                    height: "100%",
                }}
            >
                <StyledHeader />
                <ToggleButton
                    setSelectedGenre={setSelectedGenre}
                    $selectedGenre={selectedGenre}
                    numberTimesGenreSelected={numberTimesGenreSelected}
                    setNumberTimesGenreSelected={setNumberTimesGenreSelected}
                    first="sports"
                    second="adventure"
                    third="concerts"
                />
                <Masonry columnsCount={3} gutter="10px">
                    {selectedGenre == 0 && sportsImages}
                    {selectedGenre == 1 && adventureImages}
                    {selectedGenre == 2 && concertImages}
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

const StyledPhoto = styled(motion.img)`
    cursor: pointer;
`;

const Container = styled.div`
    opacity: ${(props) => (props.$currentImage != null ? "0.5" : "1")};
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    width: 100vw;
    padding-left: 3rem;
    padding-right: 3rem;
    padding-top: 6rem;
    padding-bottom: 6rem;
`;
