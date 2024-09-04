import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function FlyingBird(props) {
    const {
        src,
        initialLeft,
        initialTop,
        animateLeft,
        animateTop,
        durLeft,
        durTop,
        height,
        width,
        delay,
    } = props;
    const AnimatedImage = motion(StyledBackgroundBird);

    return (
        <AnimatedImage
            initial={{
                left: initialLeft,
                top: initialTop,
            }}
            animate={{
                left: animateLeft,
                top: animateTop,
            }}
            transition={{
                left: {
                    duration: durLeft,
                    ease: "linear",
                    delay: delay,
                    repeat: Infinity,
                    repeatDelay: 30,
                },
                top: {
                    duration: durTop,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 30,
                    repeatType: "reverse",
                },
            }}
            src={src}
            height={height}
            width={width}
            unoptimized={true}
            alt={"a flying bird"}
        ></AnimatedImage>
    );
}

const StyledBackgroundBird = styled(Image)`
    z-index: -10;
    opacity: 0.7;
    position: fixed;
    overflow: hidden;
    pointer-events: none;
`;
