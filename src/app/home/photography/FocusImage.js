import styled from "styled-components";
import { useEffect } from "react";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export default function FocusImage(props) {
    const { imagePaths, selectedGenre, currentImage, setCurrentImage } = props;
    console.log("rerender");
    const arrowForwardClick = () => {
        const test = (currentImage + 1) % imagePaths[selectedGenre].length;
        console.log(test);
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
    useEffect(() => {
        const handleKeyDown = (event) => {
            // Log the key pressed
            if (event.key === "ArrowRight") {
                arrowForwardClick();
            } else if (event.key === "ArrowLeft") {
                arrowBackwardClick();
            }
        };

        // Add the event listener
        window.addEventListener("keydown", handleKeyDown);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <>
            <StyledHighlightOffIcon
                fontSize="large"
                onClick={() => closeButtonClick()}
            />
            <StyledSinglePhotoContainer>
                <StyledArrowBackIosIcon
                    fontSize="large"
                    onClick={() => arrowBackwardClick()}
                />
                <StyledSinglePhotoImage
                    src={imagePaths[selectedGenre][currentImage]}
                />
                <StyledForwardIosIcon
                    fontSize="large"
                    onClick={() => arrowForwardClick()}
                />
            </StyledSinglePhotoContainer>
        </>
    );
}

const StyledArrowBackIosIcon = styled(ArrowCircleLeftOutlinedIcon)`
    cursor: pointer;
    height: 60px;
    width: 60px;
    z-index: 1;
`;

const StyledForwardIosIcon = styled(ArrowCircleRightOutlinedIcon)`
    cursor: pointer;
    height: 60px;
    width: 60px;
    z-index: 1;
`;

const StyledHighlightOffIcon = styled(HighlightOffIcon)`
    cursor: pointer;
    position: fixed;
    z-index: 2;
    top: 20px;
    height: 60px;
    width: 60px;
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
