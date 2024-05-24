"use client";

import styled from "styled-components";
import Link from "next/link";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export default function Home() {
    return (
        <Main>
            <Container>
                <Header>
                    <Link href="/home/portfolio">portfolio</Link>
                    <Link href="/home/photography">photography</Link>
                    <Link href="/home/writing">writing</Link>
                    <Link href="/home/about me">about me</Link>
                </Header>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeIn" }}
                >
                    <H1>i'm jake.</H1>
                    <p>hi, happy you're here.</p>
                    <p>i love making things with software, wood, and fabric.</p>
                    <p>
                        i find when i'm using creative and analytical brainpower
                        together i "work" best.
                    </p>
                    <p>
                        otherwise, you can find me climbing, surfing, or
                        running.
                    </p>
                    <p>i also love playing guitar, reading, cooking, etc.</p>
                    <p>please make yourself at home on my website.</p>
                </motion.div>
                <div>designed & coded by jake</div>
            </Container>
        </Main>
    );
}

const Main = styled.main``;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 100vh;
    padding: 6rem;
`;
const Header = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

const H1 = styled.h1`
    font-size: 8rem;
`;
