"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import BodyText from "../components/BodyText";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackgroundImage from "../components/BackgroundImage";
import SpinningText from "../components/SpinningText";
import Image from "next/image";
import FlyingBird from "../components/FlyingBird";

export default function Home() {
    const text =
        "born & raised in berkeley, ca, jake greenberg-bell is an athlete, builder, software engineer, and product designer.";

    return (
        <main>
            <BackgroundImage
                src="/homebackground2.webp"
                alt="Graph paper with California Poppy's drawn on"
            />
            <FlyingBird
                src={"/birdfaceright.gif"}
                initialLeft="-60px"
                initialTop="15vh"
                animateLeft="100vw"
                animateTop="16vh"
                durLeft="14"
                durTop="2"
                delay={0}
                height={40}
                width={40}
            />
            <FlyingBird
                src={"/birdfaceleft.gif"}
                initialLeft="105vw"
                initialTop="65vh"
                animateLeft="-5vw"
                animateTop="66vh"
                durLeft="20"
                durTop="2"
                delay={2}
                height={30}
                width={30}
            />
            <FlyingBird
                src={"/birdflockleft.gif"}
                initialLeft="105vw"
                initialTop="55vh"
                animateLeft="-5vw"
                animateTop="55.5vh"
                durLeft="26"
                durTop="2"
                delay={10}
                height={27}
                width={27}
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
    padding: 10vw;
`;

const LargerBodyText = styled(BodyText)`
    font-size: 34px;
    margin: 10vw;
    line-height: 1.3;
`;

const StyledBackgroundBird = styled(Image)`
    z-index: -10;
    opacity: 0.7;
    position: fixed;
    overflow: hidden;
    pointer-events: none;
`;
