"use client";

import Link from "next/link";
import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import styled from "styled-components";
import SimpleButton from "./components/Button";
import BodyText from "./components/BodyText";

export default function Page() {
    const baseText =
        "until the very end, we are neurologically transformed by whatever we practice. we are not limited by the past. -jack kornfield ";
    const count = useMotionValue(0);
    const time = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) =>
        baseText.slice(0, latest)
    );

    useEffect(() => {
        let controls = animate(count, baseText.length, {
            type: "tween",
            duration: 3,
            ease: "easeInOut",
        });
        controls = animate(time, 3, {
            type: "tween",
            duration: 5,
            ease: "easeInOut",
        });
        return controls.stop;
    }, []);

    return (
        <Container>
            <BodyText>
                <motion.span>{displayText}</motion.span>
            </BodyText>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3, delay: 3 }}
            >
                <Link href="/home">
                    <StyledButton title="enter site"></StyledButton>
                </Link>
            </motion.div>
        </Container>
    );
}
const Quote = styled.div`
    font-size: 2rem;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 96px;
    padding-top: 20rem;
    min-height: 100vh;
`;

const StyledButton = styled(SimpleButton)`
    margin-top: 10px;
    margin-bottom: 10px;
`;
