"use client";

import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

export default function ToggleButton(props) {
    const {
        first,
        second,
        third,
        selectedGenre,
        setSelectedGenre,
        numberTimesGenreSelected,
        setNumberTimesGenreSelected,
    } = props;
    const genreSelectedAnimator = useAnimation();
    const genreHoverAnimator = useAnimation();

    const genrePositions = {
        0: { width: "71px", left: "5px", opacity: 1 },
        1: { width: "108px", left: "74px", opacity: 1 },
        2: { width: "95px", left: "180px", opacity: 1 },
        3: { opacity: 0 },
    };

    const optionHover = (option) => {
        genreHoverAnimator.start(genrePositions[option]);
    };

    const optionClick = (option) => {
        if (selectedGenre === option) return;
        genreSelectedAnimator.start(genrePositions[option]);
        genreHoverAnimator.start(genrePositions[3]);
        setSelectedGenre(option);

        // change tracker for which genre's selected if viewed for first time
        if (numberTimesGenreSelected[option] > 1) return;
        const newNumberTimesGenreSelected = {
            ...numberTimesGenreSelected,
            [option]: numberTimesGenreSelected[option] + 1,
        };
        setNumberTimesGenreSelected(newNumberTimesGenreSelected);
    };

    return (
        <StyledToggleContainer onMouseLeave={() => optionHover(3)}>
            <StyledBackgroundSlider
                animate={genreSelectedAnimator}
                transition={{ type: "spring", duration: 0.5 }}
            ></StyledBackgroundSlider>
            <StyledBackgroundHover
                animate={genreHoverAnimator}
                transition={{ type: "linear", duration: 0.2 }}
            ></StyledBackgroundHover>

            <ToggleFirstOption
                onClick={() => optionClick(0)}
                onMouseEnter={() => optionHover(0)}
                onMouseLeave={() => optionHover(0)}
            >
                {first}
            </ToggleFirstOption>
            <ToggleSecondOption
                onClick={() => optionClick(1)}
                onMouseEnter={() => optionHover(1)}
                onMouseLeave={() => optionHover(1)}
            >
                {second}
            </ToggleSecondOption>
            <ToggleThirdOption
                onClick={() => optionClick(2)}
                onMouseEnter={() => optionHover(2)}
                onMouseLeave={() => optionHover(2)}
            >
                {third}
            </ToggleThirdOption>
        </StyledToggleContainer>
    );
}

const StyledBackgroundSlider = styled(motion.div)`
    background: #e3d7fa;
    height: 27px;
    position: absolute;
    border-radius: 15px;
    z-index: 3;
    top: 5px;
    width: 71px;
    left: 5px;
`;

const StyledBackgroundHover = styled(StyledBackgroundSlider)`
    background: hsla(277, 18%, 50%, 0.15);
    z-index: 2;
`;

const StyledToggleContainer = styled.div`
    border-color: black;
    border-style: solid;
    border-radius: 15px;
    margin-bottom: 30px;
    position: relative;
    z-index: 3;
`;

const ToggleOption = styled.span`
    z-index: 3;
    display: inline-block;
    background-color: transparent;
    position: relative;
    height: 26px;
    margin-top: 5px;
    margin-bottom: 5px;
    cursor: pointer;
    font-size: 20px;
`;

const ToggleFirstOption = styled(ToggleOption)`
    margin-left: 10px;
    margin-right: 5px;
`;

const ToggleSecondOption = styled(ToggleOption)`
    margin-left: 5px;
    margin-right: 5px;
`;

const ToggleThirdOption = styled(ToggleOption)`
    margin-left: 5px;
    margin-right: 10px;
`;
