"use client";

import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import BodyText from "../components/BodyText";
import HeaderText from "../components/HeaderText";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <main>
            <BackgroundImage
                src="/homebackground2.webp"
                fill
                priority={true}
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
                        born & raised in berkeley, ca, jake greenberg-bell is an
                        athlete, builder, and product designer.
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

const BackgroundImage = styled(Image)`
    position: absolute;
    z-index: -10;
    height: 100%;
    width: 100vw;
    object-fit: cover;
`;

const LargerBodyText = styled(BodyText)`
    font-size: 34px;
    margin: 20%;
`;
