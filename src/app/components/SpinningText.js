"use client";

import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";

export default function SpinningText(props) {
    const { text } = props;

    let textSplitOnSpacesArray = text.split(" ");
    textSplitOnSpacesArray = textSplitOnSpacesArray.reduce(
        (acc, current, index) => {
            if (index < textSplitOnSpacesArray.length - 1) {
                return [...acc, current, " "];
            } else {
                return [...acc, current];
            }
        },
        []
    );
    let text2dArray = textSplitOnSpacesArray.map((elem) => elem.split(""));
    // text2dArray = text2dArray.map((subArray) => [...subArray, " "]);
    const animateCharacterHoverArray = text2dArray.map((subArray) =>
        subArray.map(() => useAnimation())
    );

    const spinningLetter = (letter, wordIndex, charIndex) =>
        // prettier-ignore
        <StyledCharacter
        key={`letter${wordIndex}${charIndex}`}
        animate={animateCharacterHoverArray[wordIndex][charIndex]}
        onHoverStart={() => {
            animateCharacterHoverArray[wordIndex][charIndex].start({
                rotateX: 360,
                transition: { duration: 0.8, ease: "easeOut" },
            }).then(() => {
                // Reset rotation after the animation completes
                animateCharacterHoverArray[wordIndex][charIndex].set({ rotateX: 0 });
            });
          }}
    >
        {letter}
    </StyledCharacter>;

    return (
        <StyledWord>
            {text2dArray.map((wordArray, wordIndex) => (
                <StyledWord
                    key={`word${wordIndex}`}
                    style={wordIndex === 14 ? { "white-space": "nowrap" } : {}}
                >
                    {wordArray.map((char, charIndex) =>
                        spinningLetter(char, wordIndex, charIndex)
                    )}
                </StyledWord>
            ))}
        </StyledWord>
    );
}

const StyledCharacter = styled(motion.span)`
    display: inline-block;
    white-space: pre;
    perspective: 1000px;
`;

const StyledWord = styled.div`
    display: inline-block;
`;
