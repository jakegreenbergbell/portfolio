"use client";

import { motion } from "framer-motion";

import Header from "@/app/components/Header";
import HeaderText from "@/app/components/HeaderText";
import Footer from "@/app/components/Footer";
import styled from "styled-components";
import BodyText from "@/app/components/BodyText";
import Image from "next/image";
import ArticleComponent from "./ArticleComponent";
import SimpleButton from "@/app/components/Button";
import QuoteText from "@/app/components/QuoteText";

const DailyBruinArticles = [
    {
        imageSrc: "/db1.jpg",
        title: "Gabe Galen climbs over obstacles to reach FISU World University Championship",
        date: "May 26, 2022",
        preview: [
            "Gabe Galen thought his competitive climbing career was over.",
            "As the then-18-year-old accomplished athlete met with doctors in early 2020 to discuss the intense pain he was experiencing in his arm, Galen was told he needed a bone marrow biopsy to rule out bone cancer.",
            "Between his recovery from the procedure and COVID-19 shutting down climbing gyms, he was kept off the wall for 18 months.",
            "“It was definitely a really sad time for me because climbing was my entire life,”Galen said. 'It's honestly what brings me the most happiness.'",
        ],
        link: "https://dailybruin.com/2022/05/26/gabe-galen-climbs-over-obstacles-to-reach-fisu-world-university-championship",
        alt: "Gabe Galen climbs on an indoor climbing wall",
        key: 1,
    },
    {
        imageSrc: "/db2.jpg",
        title: "Former professional surfer transitions to UCLA, barrels toward graduation",
        date: "Nov. 11, 2021",
        preview: [
            "Dillon Perillo has gone to UCLA, worked a professional career and retired.",
            "But not in that order.",
            "The 31-year-old Southern Californian worked for more than 10 years as a professional surfer before retiring, although he's far from retired in the typical sense.            ",
        ],
        link: "https://dailybruin.com/2021/11/11/former-professional-surfer-transitions-to-ucla-barrels-toward-graduation",
        alt: "Dillon Perillo does a so-called 'air' while surfing",
        key: 2,
    },
    {
        imageSrc: "/db3.jpg",
        title: "UCLA men's soccer ends season with double overtime victory over California",
        date: "April 18, 2021",
        preview: [
            "First, a shot hit the post, then the second was blocked by a defender before a third was stopped by the goalie.",
            "Then, Tommy Silva’s one-time putback ricocheted off the post and found the back of the net to win the game for the Bruins in the golden goal.",
            "“I just remember it hitting two posts, a little scramble with the keeper,” the freshman defender said. “And then I was just sitting in the box and my only thought was ‘Smash it,’ and that’s what I did.”",
        ],
        link: "https://dailybruin.com/2021/04/18/ucla-mens-soccer-ends-season-with-double-overtime-victory-over-california",
        alt: "The UCLA men's soccer team celebrates their overtime win",
        key: 3,
    },
    {
        imageSrc: "/db4.jpg",
        title: "Rock climber Ross Fulkerson balances school with training, reaches for Olympics",
        date: "March 5, 2020",
        preview: [
            "Ross Fulkerson said he knew he wanted to go to college and be a professional rock climber. What he didn’t know was how hard it would be to do both at the same time, especially if it involved training for the Olympics.",
            "“I’m just not going to be able to meet my climbing goals if I put all my energy into school,” said the first-year undeclared student. “So there’s definitely a balance that I have yet to perfect, if that’s even possible.”",
        ],
        link: "https://dailybruin.com/2020/03/05/rock-climber-ross-fulkerson-balances-school-with-training-reaches-for-olympics",
        alt: "Ross Fulkerson hangs from the climbing wall",
        key: 4,
    },
];

export default function Page() {
    return (
        <main>
            <Container>
                <StyledHeader />
                <QuoteText>
                    "one day I will find the right words, and they will be
                    simple." -jack kerouac
                </QuoteText>
                <HeaderText>writing</HeaderText>
                <TabButtonContainer>
                    <SimpleButtonWithPadding title="daily bruin" />
                    <SimpleButtonWithPadding title="essays" />
                </TabButtonContainer>

                <motion.div
                    layout
                    initial={{ opacity: 0, marginTop: "-20px" }}
                    animate={{ opacity: 1, marginTop: "0px" }}
                    transition={{ duration: 1.5, ease: "easeIn" }}
                >
                    {DailyBruinArticles.map((article) => {
                        const { key, ...rest } = article;
                        return <ArticleComponent key={key} {...rest} />;
                    })}
                </motion.div>

                <StyledFooter>design & coded by Jake</StyledFooter>
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

const SimpleButtonWithPadding = styled(SimpleButton)`
    margin-right: 10px;
`;

const TabButtonContainer = styled.div``;

const StyledFooter = styled.div`
    position: sticky;
    bottom: 0;
    align-self: center;
    margin-top: 80px;
`;

const StyledHeader = styled(Header)`
    width: 100%;
`;
