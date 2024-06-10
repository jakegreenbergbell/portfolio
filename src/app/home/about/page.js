"use client";

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
            <Container>
                <Header />
                <QuoteText>
                    "we are not separate, we are interdependent" - the buddha
                </QuoteText>
                <motion.div
                    layout
                    initial={{ opacity: 0, marginTop: "-20px" }}
                    animate={{ opacity: 1, marginTop: "0px" }}
                    transition={{ duration: 1.5, ease: "easeIn" }}
                >
                    <HeaderText>about me</HeaderText>
                    <BodyText>
                        well here's where i'm supposed to explain myself.
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
    min-height: 100vh;
    padding: 6rem;
`;
