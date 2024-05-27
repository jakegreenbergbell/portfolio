"use client";

import Header from "@/app/components/Header";
import HeaderText from "@/app/components/HeaderText";
import Footer from "@/app/components/Footer";
import styled from "styled-components";
import BodyText from "@/app/components/BodyText";
import Image from "next/image";
import ArticleComponent from "./ArticleComponent";

const DailyBruinArticles = [
    {
        imageSrc: "/db1.jpg",
        title: "Gabe Galen climbs over obstacles to reach FISU World University Championship",
        date: "May 26, 2022",
        link: "https://dailybruin.com/2022/05/26/gabe-galen-climbs-over-obstacles-to-reach-fisu-world-university-championship",
    },
    {
        imageSrc: "/db2.jpg",
        title: "Former professional surfer transitions to UCLA, barrels toward graduation",
        date: "Nov. 11, 2021",
        link: "https://dailybruin.com/2021/11/11/former-professional-surfer-transitions-to-ucla-barrels-toward-graduation",
    },
    {
        imageSrc: "/db3.jpg",
        title: "UCLA men’s soccer ends season with double overtime victory over California",
        date: "April 18, 2021",
        link: "https://dailybruin.com/2021/04/18/ucla-mens-soccer-ends-season-with-double-overtime-victory-over-california",
    },
];

export default function Page() {
    return (
        <main>
            <Container>
                <StyledHeader />
                <div>
                    <HeaderText>test</HeaderText>
                    <Quote>
                        "one day I will find the right words, and they will be
                        simple. -jack kerouac"
                    </Quote>
                    {DailyBruinArticles.map((article) => (
                        <ArticleComponent {...article} />
                    ))}

                    <BodyText>thius is some text</BodyText>
                </div>
                <StyledFooter />
            </Container>
        </main>
    );
}

const ImageContainer = styled.div`
    height: clamp(5em, 15em + 3vw, 30em);
    width: clamp(5em, 15em + 3vw, 30em);
    position: relative;
    object-fit: "contain";
`;
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const WritingContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 6rem;
`;

const Quote = styled.div`
    font-weight: 100;
    color: rgb(150 150 150);
`;

const StyledFooter = styled(Footer)`
    position: sticky;
    bottom: 0;
`;

const StyledHeader = styled(Header)`
    width: 100%;
`;
