"use client";
import styled from "styled-components";
import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import {
    Container,
    ContentWrapper,
} from "@/app/components/demomagic/Container";
import {
    Title,
    TitleHighlighted,
    BodyText,
    Quote,
} from "@/app/components/demomagic/Typography";
import { CenteredImage, InlineImage } from "@/app/components/demomagic/Images";
import {
    FeatureList,
    FeatureItem,
    SubFeatureList,
    SubFeatureItem,
} from "@/app/components/demomagic/FeatureList";

export default function FocusMode() {
    return (
        <main>
            <Container>
                <Header />
                <ContentWrapper>
                    <Quote>
                        “The solution to our attention crisis is not to grind
                        our teeth and try harder, but to create a world where it
                        is easier for all of us to pay attention.” –Stolen
                        Focus: Why You Can&apos;t Pay Attention by Johann Hari
                    </Quote>

                    <Title>Focus Mode</Title>

                    <TitleHighlighted>
                        When it comes to their inquiries, customers care about
                        two main things: the quality and speed of the response.
                    </TitleHighlighted>

                    <BodyText>
                        They expect their inquiries to be resolved with clear
                        solutions. At the same time, if that solution comes too
                        late, it will be all for naught.
                    </BodyText>

                    <BodyText>
                        On the other side, customer-facing employees attempting
                        to drive positive business impact care most about high
                        customer satisfaction, NPS scores, and other leading
                        metrics of business success.
                    </BodyText>

                    <BodyText>
                        Given their knowledge of the customer’s emphasis on
                        speed and quality, these employees constantly balance
                        the two to maximize the number of delighted customers
                        they can serve in their days and weeks.
                    </BodyText>

                    <BodyText>
                        Meanwhile, increased adoption of sharper
                        customer-operations tools has caused customers’ baseline
                        expectations to grow higher and higher. As AI handles
                        repetitive questions, the inquiries that land in the
                        inboxes of customer-facing teams are increasingly
                        complex. Expectations are rising, and the complexity of
                        problems is increasing too.
                    </BodyText>

                    <BodyText>
                        Yet the workers being asked to do more and more struggle
                        to stay focused on a single task. With social media
                        products reinforcing a lack of long-term focused
                        thinking, our brains are increasingly tuned to search
                        for the next dopamine hit.
                    </BodyText>

                    <BodyText>
                        Even in the working world, focus is a resource sought
                        after by a multitude of tools. Statistics on the average
                        number of software tools used by a mid-market company
                        vary, but they are all in the hundreds.
                    </BodyText>

                    <BodyText>
                        Ideally, these tools are perfectly integrated with Front
                        so that an employee can resolve customer inquiries
                        expertly without ever leaving the platform. But even in
                        a hypothetical perfect integration with notifications
                        dialed in and Do Not Disturb turned on, the Front
                        interface itself still struggles to support focus.
                    </BodyText>

                    <TitleHighlighted>
                        Users can be easily distracted by:
                    </TitleHighlighted>

                    <FeatureList>
                        <FeatureItem>
                            New inbound communication that is assigned to the
                            user.
                            <br />
                            <InlineImage
                                src="/focusmodeimages/image7.png"
                                alt="Notification highlighting a new assigned conversation"
                                width={400}
                                height={358}
                            />
                        </FeatureItem>
                        <FeatureItem>
                            New inbound communication in inboxes other than the
                            one the user is currently working in.
                            <InlineImage
                                src="/focusmodeimages/image3.png"
                                alt="Focus Mode sample showing inbox filtering"
                                width={400}
                                height={253}
                            />
                        </FeatureItem>
                        <FeatureItem>
                            Comments in conversations the user is assigned or
                            subscribed to, and other conversations in the list
                            that grab their attention.
                            <InlineImage
                                src="/focusmodeimages/image5.png"
                                alt="Conversation list illustrating multiple comment threads"
                                width={344}
                                height={565}
                            />
                        </FeatureItem>
                    </FeatureList>

                    <BodyText>
                        The distracting aspects of the inbox sidebar can be
                        somewhat solved by the hidden sidebar feature, but the
                        ease of accessing it—even when hidden—still makes it a
                        source of distraction.
                    </BodyText>

                    <BodyText>
                        Ultimately, as builders of Front, we cannot control the
                        state of our users' minds. We can only shape their
                        experience so they can work well in whatever mental
                        state they arrive.
                    </BodyText>

                    <BodyText>
                        Focus is fickle. An intentionally designed interface can
                        provide guardrails to help support agents stay on track
                        and achieve their two main goals of quality and speed.
                    </BodyText>

                    <TitleHighlighted>
                        The critical jobs to be done:
                    </TitleHighlighted>

                    <FeatureList>
                        <FeatureItem>
                            As a customer-facing employee working out of Front,
                            I want to stay focused on the current conversation
                            I'm working on so I can answer it quickly and
                            thoughtfully.
                        </FeatureItem>
                        <FeatureItem>
                            As a customer-facing employee, I want to know how
                            many conversations are currently in my queue so that
                            I can track my progress toward inbox zero.
                        </FeatureItem>
                        <FeatureItem>
                            As a customer-facing employee, I don't want to be
                            distracted by other conversations, yet I still need
                            access to the plugins, search, and knowledge base I
                            rely on to resolve tickets.
                        </FeatureItem>
                    </FeatureList>

                    <BodyText>
                        From a business standpoint, Focus Mode differentiates
                        Front from competitors, delights users who were
                        disgruntled by previous redesigns, and emphasizes the
                        “quality first” narrative.
                    </BodyText>

                    <BodyText>
                        Focus Mode is not intended for customer-facing employees
                        who handle multiple simultaneous conversations, such as
                        live chat specialists.
                    </BodyText>

                    <BodyText>
                        The solution removes distractions introduced by the
                        Front interface while ensuring employees retain the
                        tools they need to answer customer inquiries.
                    </BodyText>

                    <CenteredImage>
                        <Image
                            src="/focusmodeimages/image6.png"
                            alt="Focus Mode setup journey screens"
                            width={1000}
                            height={625}
                        />
                    </CenteredImage>

                    <BodyText>
                        A setup guide allows employees to configure the
                        experience to maximize value. Prioritization ensured the
                        project could ship at different levels of fidelity while
                        maintaining usefulness.
                    </BodyText>

                    <CenteredImage>
                        <Image
                            src="/focusmodeimages/image2.png"
                            alt="Focus Mode configuration flow"
                            width={400}
                            height={715}
                        />
                    </CenteredImage>

                    <BodyText>
                        After configuration, there is intentional friction to
                        remind users of Focus Mode's core goal.
                    </BodyText>

                    <CenteredImage>
                        <Image
                            src="/focusmodeimages/image1.png"
                            alt="Reminder message reinforcing the Focus Mode goal"
                            width={400}
                            height={308}
                        />
                    </CenteredImage>

                    <TitleHighlighted>Must have for MVP</TitleHighlighted>

                    <FeatureList>
                        <FeatureItem>
                            Show conversations from inboxes dropdown.
                            <SubFeatureList>
                                <SubFeatureItem>
                                    Allows users to select which inboxes feed
                                    the Focus Mode queue, such as Open or
                                    Assigned.
                                </SubFeatureItem>
                            </SubFeatureList>
                        </FeatureItem>
                        <FeatureItem>
                            Prioritize conversations dropdown.
                            <SubFeatureList>
                                <SubFeatureItem>
                                    Lets users choose how conversations are
                                    served in Focus Mode.
                                </SubFeatureItem>
                                <SubFeatureItem>Newest</SubFeatureItem>
                                <SubFeatureItem>Oldest</SubFeatureItem>
                                <SubFeatureItem>
                                    Newest unreplied
                                </SubFeatureItem>
                                <SubFeatureItem>
                                    Oldest unreplied
                                </SubFeatureItem>
                                <SubFeatureItem>
                                    Closest to time goal
                                </SubFeatureItem>
                            </SubFeatureList>
                        </FeatureItem>
                    </FeatureList>

                    <TitleHighlighted>
                        Nice-to-have (ranked by priority)
                    </TitleHighlighted>

                    <FeatureList>
                        <FeatureItem>
                            Hidden topbar to deliver a full distraction-free
                            mode.
                        </FeatureItem>
                        <FeatureItem>
                            Timer for the session so users act intentionally
                            with their focus.
                        </FeatureItem>
                        <FeatureItem>
                            Smart incident notifier option.
                            <SubFeatureList>
                                <SubFeatureItem>
                                    Alerts agents when abnormal volume suggests
                                    an incident, building trust in Focus Mode.
                                </SubFeatureItem>
                            </SubFeatureList>
                        </FeatureItem>
                        <FeatureItem>
                            Option to pause new conversations entering the queue
                            so users can finish what’s in front of them.
                        </FeatureItem>
                        <FeatureItem>
                            Save settings as default, with flexibility to opt
                            out for one-off sessions.
                            <SubFeatureList>
                                <SubFeatureItem>
                                    If omitted from scope, configurations
                                    default to being saved each time.
                                </SubFeatureItem>
                            </SubFeatureList>
                        </FeatureItem>
                        <FeatureItem>
                            Filter by conversation type (All, Conversations,
                            Tasks, Discussions) to mirror inbox filtering.
                        </FeatureItem>
                    </FeatureList>

                    <BodyText>
                        <StyledLink
                            href="https://www.figma.com/proto/5BrMbdZiLbrxYVGR1fc277/Front-Focus-Mode?page-id=163%3A72006&node-id=2029-96158&viewport=-2835%2C729%2C0.58&t=DaG1jUty8JFW0QYD-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=163%3A72007"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Here
                        </StyledLink>{" "}
                        is a prototype to see the full experience.
                    </BodyText>
                </ContentWrapper>
                <StyledFooter />
            </Container>
        </main>
    );
}

const StyledFooter = styled(Footer)`
    text-align: center;
`;

const StyledLink = styled.a`
    color: blue;
    text-decoration: underline;
`;
