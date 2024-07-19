"use client";

import Image from "next/image";
import styled from "styled-components";
import Header from "@/app/components/Header";
import { motion } from "framer-motion";
import HeaderText from "@/app/components/HeaderText";
import BodyText from "@/app/components/BodyText";
import Footer from "@/app/components/Footer";
import QuoteText from "@/app/components/QuoteText";

export default function About() {
    return (
        <main>
            <BackgroundImage
                src="/aboutbackground.webp"
                height="850"
                width="850"
                priority={true}
                alt="Graph paper with California Poppy's drawn on"
            />
            <Container>
                <Header />
                <QuoteText>
                    "we are not separate, we are interdependent" - the buddha
                </QuoteText>
                <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                >
                    <HeaderText>about me</HeaderText>
                </motion.div>

                <StyledBodyText>
                    <motion.div
                        layout
                        initial={{ opacity: 0, marginTop: "-10px" }}
                        animate={{ opacity: 1, marginTop: "0px" }}
                        transition={{ duration: 1, ease: "easeIn" }}
                    >
                        <FirstParagraph>
                            &emsp; Thoughtful human creations have always
                            created a resonance within my mind. They inspire our
                            thinking, expand our boundaries, and remind us of
                            our shared connections. As I honed my technological
                            and business acumen, an ember of creative passion
                            continued to smolder patiently within my heart;
                            stoked by the creative aspects of my internships,
                            schoolwork, and hobbies. I've found immense joy by
                            unshackling these creative forces within myself.
                            Imaging, designing, and creating.
                        </FirstParagraph>
                        <SecondParagraph>
                            &emsp; I bring more than 7 years of full stack
                            programming experience and professional internships
                            at CloudBase Services, Front, and Cisco. As well as
                            a degree in Computer Science from UCLA. Now building
                            QuickAppSnap, an AI powered database documentation
                            tool with fast growing four figure annual revenue.
                            My name is Jake Greenberg-Bell and I am a product
                            designer.
                        </SecondParagraph>
                    </motion.div>
                </StyledBodyText>
                <Footer />
            </Container>
        </main>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    padding: 6rem;
`;

const StyledBodyText = styled(BodyText)`
    width: 100vw;
    padding-top: 50px;
    padding-left: 6rem;
    padding-right: 6rem;
`;

const FirstParagraph = styled.div``;

const SecondParagraph = styled.div`
    margin-top: 20px;
`;

const BackgroundImage = styled(Image)`
    position: fixed;
    z-index: -10;
    height: 100%;
    width: 100%;
    object-fit: cover;
`;
