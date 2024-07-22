"use client";

import Image from "next/image";
import styled from "styled-components";
import Header from "@/app/components/Header";
import { motion } from "framer-motion";
import HeaderText from "@/app/components/HeaderText";
import BodyText from "@/app/components/BodyText";
import Footer from "@/app/components/Footer";

export default function Page() {
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
                <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                >
                    <StyledHeaderText>portfolio</StyledHeaderText>
                </motion.div>

                <StyledBodyText>
                    <motion.div
                        layout
                        initial={{ opacity: 0, marginTop: "-10px" }}
                        animate={{ opacity: 1, marginTop: "0px" }}
                        transition={{ duration: 1, ease: "easeIn" }}
                    >
                        <FirstParagraph>
                            under construction... but thanks for coming!
                        </FirstParagraph>
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

const StyledHeaderText = styled(HeaderText)`
    margin-top: 80px;
`;

const StyledBodyText = styled(BodyText)`
    width: 100vw;
    padding-top: 50px;
    padding-left: 6rem;
    padding-right: 6rem;
`;

const FirstParagraph = styled.div``;

const BackgroundImage = styled(Image)`
    position: fixed;
    z-index: -10;
    height: 100%;
    width: 100%;
    object-fit: cover;
`;
