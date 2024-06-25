"use client";

import styled from "styled-components";
import Header from "@/app/components/Header";
import { motion } from "framer-motion";
import HeaderText from "@/app/components/HeaderText";
import BodyText from "@/app/components/BodyText";
import Footer from "@/app/components/Footer";
import QuoteText from "@/app/components/QuoteText";

export default function About() {
    const variants = {
        visible: (i) => ({
            opacity: 1,
            transition: {
                delay: i * 0.3,
            },
        }),
        hidden: { opacity: 0 },
    };
    const letters = ["a", "b", "o", "u", "t", " ", "m", "e"];
    const margins = Array.from({ length: 7 }).map(
        () => Math.floor(Math.random() * 101) - 50
    );
    const heights = Array.from({ length: 7 }).map(() =>
        Math.floor(Math.random() * 20)
    );

    return (
        <main>
            <Container>
                <Header />
                <QuoteText>
                    "we are not separate, we are interdependent" - the buddha
                </QuoteText>
                <div>
                    <HeaderText>
                        {letters.map((letter, index) => {
                            return (
                                <motion.span
                                    layout
                                    initial={{
                                        marginRight: margins[index] + "px",
                                        bottom: heights[index] + "px",
                                        position: "relative",
                                    }}
                                    animate={{
                                        marginRight:
                                            "-" + margins[index] + "px",
                                        bottom: "-" + heights[index] + "px",
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        ease: "circInOut",
                                        repeat: Infinity,
                                        repeatType: "mirror",
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            );
                        })}
                    </HeaderText>

                    <BodyText>
                        well here's where i'm supposed to explain myself.
                    </BodyText>
                </div>
                <Footer />
            </Container>
        </main>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 6rem;
`;
