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
                src="/aboutbackground.png"
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

                <HeaderText>about me</HeaderText>

                <StyledBodyText>
                    <div>
                        bio goes here. bio goes here. bio goes here. bio goes
                        here. bio goes here. bio goes here. bio goes here. bio
                        goes here. bio goes here. bio goes here. bio goes here.
                        bio goes here. bio goes here. bio goes here. bio goes
                        here. bio goes here.
                    </div>
                    <div>
                        bio goes here. bio goes here. bio goes here. bio goes
                        here. bio goes here. bio goes here. bio goes here. bio
                        goes here. bio goes here. bio goes here. bio goes here.
                        bio goes here. bio goes here. bio goes here. bio goes
                        here. bio goes here.
                    </div>
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

const BackgroundImage = styled(Image)`
    position: absolute;
    z-index: -10;
    height: 100%;
    width: 100%;
    object-fit: cover;
`;
