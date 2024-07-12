import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

export default function ToggleButton(props) {
    const { first, second, $selectedGenre, setSelectedGenre } = props;
    const controls = useAnimation();

    const firstOptionClick = () => {
        if ($selectedGenre === 0) return;
        controls.start({ width: "67px", left: "5px" });
        setSelectedGenre(0);
    };

    const secondOptionClick = () => {
        if ($selectedGenre === 1) return;

        controls.start({ width: "98px", left: "72px" });
        setSelectedGenre(1);
    };

    return (
        <StyledToggleContainer>
            <StyledBackgroundSlider
                animate={controls}
                transition={{ type: "spring", duration: 0.5 }}
                $selectedGenre={$selectedGenre}
            ></StyledBackgroundSlider>

            <ToggleFirstOption onClick={() => firstOptionClick()}>
                {first}
            </ToggleFirstOption>
            <ToggleSecondOption onClick={() => secondOptionClick()}>
                {second}
            </ToggleSecondOption>
        </StyledToggleContainer>
    );
}

const StyledBackgroundSlider = styled(motion.div)`
    background: #e3d7fa;
    height: 20px;
    position: absolute;
    border-radius: 15px;
    z-index: 2;
    top: 5px;

    width: ${(props) => (props.$selectedGenre === 0 ? "67px" : "98px")};
    left: ${(props) => (props.$selectedGenre === 0 ? "5px" : "72px")};
`;

const StyledToggleContainer = styled.div`
    border-color: black;
    border-style: solid;
    border-radius: 15px;
    margin-bottom: 30px;
    position: relative;
    z-index: 3;
`;

const ToggleFirstOption = styled.span`
    z-index: 3;
    margin-left: 10px;
    margin-right: 5px;
    display: inline-block;
    margin-bottom: 10px;
    padding-top: 5px;
    height: 20px;
    background-color: transparent;
    position: relative;
    z-index: 3;
    pointer: cursor;
`;

const ToggleSecondOption = styled.span`
    margin-left: 5px;
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: transparent;
    position: relative;
    z-index: 3;
`;
