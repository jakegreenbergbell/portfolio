"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import BodyText from "../components/BodyText";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackgroundImage from "../components/BackgroundImage";
import SpinningText from "../components/SpinningText";

export default function Home() {
    const text =
        "born & raised in berkeley, ca, jake greenberg-bell is an athlete, builder, and product designer.";

    return (
        <main>
            <BackgroundImage
                src="/homebackground2.webp"
                alt="Graph paper with California Poppy's drawn on"
            />
            <Container>
                <Header />
                <motion.div
                    layout
                    initial={{ opacity: 0, marginTop: "-20px" }}
                    animate={{ opacity: 1, marginTop: "0px" }}
                    transition={{ duration: 1.5, ease: "easeIn" }}
                >
                    <LargerBodyText>
                        <SpinningText text={text} />
                    </LargerBodyText>
                </motion.div>
                <Footer />
            </Container>
        </main>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 100vh;
    padding: 6rem;
`;

const LargerBodyText = styled(BodyText)`
    font-size: 34px;
    margin: 20%;
    line-height: 1.3;
`;
