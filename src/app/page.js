"use client";
// `app/page.js` is the UI for the `/` URL
import Link from "next/link";
import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import styled from "styled-components";

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
        const controls = animate(count, baseText.length, {
            type: "tween", // Not really needed because adding a duration will force "tween"
            duration: 3,
            ease: "easeInOut",
        });
        return controls.stop;
    }, []);

    useEffect(() => {
        const controls = animate(time, 3, {
            type: "tween", // Not really needed because adding a duration will force "tween"
            duration: 5,
            ease: "easeInOut",
        });
        return controls.stop;
    }, []);

    return (
        <Container>
            <Quote>
                <motion.span>{displayText}</motion.span>
            </Quote>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3, delay: 3 }}
            >
                <Link href="/home">enter site</Link>
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
