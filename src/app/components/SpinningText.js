import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";

export default function SpinningText(props) {
    const { text } = props;
    const animateCharacterHoverArray = text.split("").map(() => useAnimation());

    const spinningLetter = (letter, index) =>
        // prettier-ignore
        <StyledCharacter
        key={index}
        animate={animateCharacterHoverArray[index]}
        onHoverStart={() => {
            animateCharacterHoverArray[index].start({
                rotateX: 360,
                transition: { duration: 0.8, ease: "easeOut" },
            }).then(() => {
                // Reset rotation after the animation completes
                animateCharacterHoverArray[index].set({ rotateX: 0 });
            });
          }}
    >
        {letter}
    </StyledCharacter>;

    return (
        <>
            {Array.from(text).map((char, index) => {
                return spinningLetter(char, index);
            })}
        </>
    );
}

const StyledCharacter = styled(motion.span)`
    display: inline-block;
    white-space: pre;
    perspective: 1000px;
`;
