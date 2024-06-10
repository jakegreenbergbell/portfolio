"use client";

import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";
import BodyText from "../components/BodyText";
import HeaderText from "../components/HeaderText";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <main>
            <Container>
                <Header />
                <motion.div
                    layout
                    initial={{ opacity: 0, marginTop: "-20px" }}
                    animate={{ opacity: 1, marginTop: "0px" }}
                    transition={{ duration: 1.5, ease: "easeIn" }}
                >
                    <HeaderText>i'm jake.</HeaderText>
                    <BodyText>
                        hi, happy you're here.
                        <br />
                        i love making things with software, wood, and fabric.
                        <br />
                        i find when i'm using creative and analytical brainpower
                        together i "work" best.
                        <br />
                        otherwise, you can find me climbing, surfing, running,
                        playing guitar, or reading.
                        <br />
                        please make yourself at home on my website.
                        <br />
                    </BodyText>
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
