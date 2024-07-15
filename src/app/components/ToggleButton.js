import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

export default function ToggleButton(props) {
    const {
        first,
        second,
        third,
        $selectedGenre,
        setSelectedGenre,
        numberTimesGenreSelected,
        setNumberTimesGenreSelected,
    } = props;
    const controls = useAnimation();

    const optionClick = (option) => {
        if ($selectedGenre === option) return;

        switch (option) {
            case 0:
                controls.start({ width: "67px", left: "5px" });
                break;
            case 1:
                controls.start({ width: "98px", left: "72px" });
                break;
            case 2:
                controls.start({ width: "88px", left: "168px" });
                break;
        }
        setSelectedGenre(option);

        // change tracker for which genre's selected if viewed for first time
        if (numberTimesGenreSelected[option] > 1) return;
        let newGenreSelected = { ...numberTimesGenreSelected };
        newGenreSelected[option] += 1;
        setNumberTimesGenreSelected(newGenreSelected);
    };

    return (
        <StyledToggleContainer>
            <StyledBackgroundSlider
                animate={controls}
                transition={{ type: "spring", duration: 0.5 }}
            ></StyledBackgroundSlider>

            <ToggleFirstOption onClick={() => optionClick(0)}>
                {first}
            </ToggleFirstOption>
            <ToggleSecondOption onClick={() => optionClick(1)}>
                {second}
            </ToggleSecondOption>
            <ToggleThirdOption onClick={() => optionClick(2)}>
                {third}
            </ToggleThirdOption>
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
    width: 67px;
    left: 5px;
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
    pointer: cursor;
    height: 20px;
    margin-top: 5px;
    margin-bottom: 5px;
    cursor: pointer;
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
