"use client";

import Image from "next/image";
import styled from "styled-components";
import Header from "@/app/components/Header";
import { motion } from "framer-motion";
import HeaderText from "@/app/components/HeaderText";
import BodyText from "@/app/components/BodyText";
import Footer from "@/app/components/Footer";
import { garamond } from "@/app/layout";
import PortfolioEntry from "@/app/components/PortfolioEntry";

export default function Page() {
    return (
        <main>
            <Container>
                <Header />
                <PortfolioContainer>
                    <PortfolioEntry
                        title="focus mode"
                        subtitle="designing focus into the front experience"
                        photoSrc="/focusmode.svg"
                        photoAlt="photoAlt"
                        link="/home/portfolio/focusmode"
                    />
                    <PortfolioEntry
                        title="demo magic"
                        subtitle="the creation of effortless live demoing"
                        photoSrc="/demomagic.svg"
                        photoAlt="photoAlt"
                        link="/home/portfolio/demomagic"
                    />
                </PortfolioContainer>
                <Footer />
            </Container>
        </main>
    );
}

const PortfolioContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-self: stretch;
    padding-top: 6vh;
    gap: 3vh;
    filter: grayscale(100%);

    &:hover {
        filter: grayscale(0%);
        transition: filter 0.3s ease-in-out;
    }
`;

const Container = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 8vh;
    padding-bottom: 2vh;
    padding-left: 10vw;
    padding-right: 10vw;
    background-color: rgb(251, 251, 251);
`;

const StyledBodyText = styled(BodyText)`
    width: 100vw;
    padding-top: 50px;
    padding-left: 6rem;
    padding-right: 6rem;
`;

const StyledQuoteContainer = styled(motion.div)`
    font-size: 35px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    font-size: 35px;
    height: calc(100vh - 6rem);
    width: 100vw;
    padding-left: 70px;
    padding-right: 70px;
    letter-spacing: 2px;
`;

const QuotePadding = styled.div`
    padding-top: 20vh;
`;
const FirstParagraph = styled.p``;
const RightParagraph = styled(motion.p)`
    text-align: right;
    padding-left: 50px;
`;
