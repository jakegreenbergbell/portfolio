"use client";
import styled from "styled-components";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import {
    Container,
    ContentWrapper,
} from "@/app/components/demomagic/Container";
import {
    Title,
    TitleHighlighted,
    BodyText,
    Quote,
    InternalQuote,
} from "@/app/components/demomagic/Typography";
import { CenteredImage, InlineImage } from "@/app/components/demomagic/Images";
import {
    BeforeAfterComparison,
    ComparisonColumn,
    ComparisonImage,
    ComparisonLabel,
} from "@/app/components/demomagic/Comparison";
import {
    FeatureList,
    FeatureItem,
    SubFeatureList,
    SubFeatureItem,
} from "@/app/components/demomagic/FeatureList";
import { QuoteContainer } from "@/app/components/demomagic/QuoteContainer";

export default function DemoMagic() {
    return (
        <main>
            <Container>
                <Header />
                <ContentWrapper>
                    <Quote>
                        "Everybody buys on feeling." - Tom Rinks co-founder of
                        Sun Bum
                    </Quote>
                    <Title>Demo Magic</Title>

                    <TitleHighlighted>
                        Live demos are hard to pull off because of the manual
                        work required.
                    </TitleHighlighted>

                    <BodyText>
                        A live demo is the best way to demonstrate the power of
                        Front to prospects, but the tool that sellers use to
                        import an email live into an inbox is manual and slow.
                    </BodyText>

                    <TitleHighlighted>
                        I improved the tool by allowing a seller to import an
                        email in one click.
                    </TitleHighlighted>

                    <BodyText>
                        The plugin tool now allows a seller to save a
                        configuration of an email and then send it one click
                        during their demo.
                    </BodyText>

                    <TitleHighlighted>
                        Now more live demos will happen, which means a higher
                        top-of-funnel conversion percentage and ultimately more
                        money for the business.
                    </TitleHighlighted>

                    <BeforeAfterComparison>
                        <ComparisonColumn>
                            <ComparisonImage>
                                <Image
                                    src="/demomagicimages/image7.gif"
                                    alt="Before: 20 second, 10 click process"
                                    width={347}
                                    height={574}
                                />
                            </ComparisonImage>
                            <ComparisonLabel>
                                Before: 20 second, 10 click process.
                            </ComparisonLabel>
                        </ComparisonColumn>
                        <ComparisonColumn>
                            <ComparisonImage>
                                <Image
                                    src="/demomagicimages/image9.gif"
                                    alt="After: 1 second, 1 click process"
                                    width={177}
                                    height={522}
                                />
                            </ComparisonImage>
                            <ComparisonLabel>
                                After: 1 second, 1 click process.
                            </ComparisonLabel>
                        </ComparisonColumn>
                    </BeforeAfterComparison>

                    <CenteredImage>
                        <Image
                            src="/demomagicimages/image1.png"
                            alt="The plugin, before and after."
                            width={558}
                            height={784}
                        />
                    </CenteredImage>
                    <BodyText
                        style={{ textAlign: "center", fontStyle: "italic" }}
                    >
                        The plugin, before and after.
                    </BodyText>

                    <BodyText style={{ fontSize: "14px", fontStyle: "italic" }}>
                        What is Front you might ask? Front is a modern
                        customer-experience platform that brings together all
                        customer communication into one AI-powered collaborative
                        workspace.
                    </BodyText>

                    <BodyText style={{ fontSize: "14px", fontStyle: "italic" }}>
                        You can create a custom "plugin" in Front. These are web
                        pages that have access to Front data and are embedded in
                        the Front interface. Thus, this tool is custom built for
                        sellers to import an email into an inbox, but is not a
                        native part of the Front product.
                    </BodyText>

                    <TitleHighlighted>
                        I discovered the problem while giving my first demo at
                        Front.
                    </TitleHighlighted>

                    <BodyText>
                        In early February, I was demoing Front to a potential
                        customer and I noticed a major usability problem in the
                        main tool used by sellers to showcase the product. I
                        wanted to live demo the magic of the product: an email
                        arriving into a shared inbox, our rules engine
                        automating actions, and then real-time collaboration
                        occurring.
                    </BodyText>

                    <BodyText>
                        "I'll now showcase an email arriving into the
                        collections inbox, the email being automatically tagged,
                        and then being round-robin assigned to the team."
                    </BodyText>

                    <BodyText>
                        I opened up our demoing plugin and began filling out the
                        email fields: to, from, inbox, subject, and body. The
                        pace of the demo screeched to a halt.
                    </BodyText>

                    <BodyText>
                        "So let me just take one moment to fill out our email
                        importer tool." Cue me frantically copying and pasting
                        information into the plugin and losing my train of
                        thought.
                    </BodyText>

                    <BodyText>My non-technical counterpart jumps in.</BodyText>

                    <BodyText>
                        "While Jake is setting that up, I'll try to…"
                    </BodyText>

                    <BodyText>
                        The flow of the demo had been broken and it left Front
                        looking unpolished.
                    </BodyText>

                    <TitleHighlighted>
                        Why live demoing even matters: live demoing is a more
                        delightful and entertaining experience for prospective
                        buyers.
                    </TitleHighlighted>

                    <BodyText>
                        As research shows, people make decisions based on
                        emotion and justify it with logic. Thus demos should be
                        an enriching and even entertaining experience for
                        buyers. When this happens, more deals are won and the
                        business makes more money.
                    </BodyText>

                    <TitleHighlighted>
                        Because of this manual and time consuming task to import
                        an email live, it turns out that many sellers do not
                        live demo, or only live demo a portion of their content.
                    </TitleHighlighted>

                    <BodyText>
                        Instead, they show existing conversations and
                        laboriously explain what automations or history
                        occurred.
                    </BodyText>

                    <BodyText>
                        So I set about trying to validate whether this was a
                        shared problem and figure out how to improve the tool.
                    </BodyText>

                    <TitleHighlighted>
                        First, I asked the end-users of the plugin if they also
                        experienced this problem. They resoundingly answered
                        "yes."
                    </TitleHighlighted>

                    <BodyText>
                        Luckily, I work with the other end-users of this plugin.
                        So I reached out to Solution Engineers who do custom
                        demos frequently to see if they felt the same way. The
                        sentiment was unanimous: yes they did.
                    </BodyText>

                    <CenteredImage>
                        <Image
                            src="/demomagicimages/image5.png"
                            alt="Solutions Engineer quote"
                            width={559}
                            height={107}
                        />
                    </CenteredImage>

                    <QuoteContainer>
                        <InternalQuote>
                            "I've tried to structure my demos to where I'm only
                            sending in one new message." – Last year's #1
                            Solutions Engineer at Front admitting the tool
                            shapes how he does his demos, not the opposite.
                        </InternalQuote>

                        <CenteredImage>
                            <Image
                                src="/demomagicimages/image3.png"
                                alt="Solutions Engineer quote"
                                width={580}
                                height={53}
                            />
                        </CenteredImage>

                        <InternalQuote>
                            "I don't use it during a live call because of the
                            copy/paste required" - More confirmation of the pain
                            point from another Solutions Engineer.
                        </InternalQuote>
                    </QuoteContainer>

                    <TitleHighlighted>
                        Now that I had confirmation this was a shared pain
                        point, I created a visual explanation of how you could
                        solve the problem to get buy-in from the engineering
                        team.
                    </TitleHighlighted>

                    <BodyText>
                        It would be a simple solution that built upon the
                        current tool but removed the manual process of filling
                        out the email fields from scratch. The concept was a
                        pattern that already exists: a template. This template
                        would save a configuration of the email and its fields
                        for later reuse or augmentation.
                    </BodyText>

                    <CenteredImage>
                        <Image
                            src="/demomagicimages/image6.png"
                            alt="Visual explanation"
                            width={619}
                            height={105}
                        />
                    </CenteredImage>
                    <InternalQuote>
                        “That's an excellent visual explanation” - Software
                        Engineer at Front who would be building the
                        improvements.
                    </InternalQuote>

                    <TitleHighlighted>
                        The high fidelity mockups I went on to create were
                        firmly grounded in the critical user journeys.
                    </TitleHighlighted>

                    <BodyText>
                        With no product manager to create user stories or a
                        specification, I created these myself to solidify my
                        understanding of the problem and serve as an
                        underpinning for my designs. The functional needs should
                        map directly to the designed user journeys. Here are
                        three examples:
                    </BodyText>

                    <FeatureList>
                        <FeatureItem>
                            Give plugin users the ability to save all the values
                            entered in the Custom Email form as a template
                        </FeatureItem>
                        <FeatureItem>
                            When wanting to send the same Custom Email again,
                            users can choose to either:
                            <SubFeatureList>
                                <SubFeatureItem>
                                    Populate the fields from their template and
                                    make small adjustments before sending
                                </SubFeatureItem>
                                <SubFeatureItem>
                                    Populate & Send which would populate the
                                    fields and send the email all at once for
                                    quickest use
                                </SubFeatureItem>
                            </SubFeatureList>
                        </FeatureItem>
                        <FeatureItem>
                            Users can name the templates upon creation for
                            clarity
                        </FeatureItem>
                    </FeatureList>

                    <TitleHighlighted>
                        My designs were based on the existing design system. I
                        reused components whenever possible while also
                        identifying patterns that could be improved with this
                        project.
                    </TitleHighlighted>

                    <BodyText>
                        In order to have a reasonable development timeline while
                        ensuring a usable interface, I planned to reuse as many
                        existing components as possible. Nonetheless, I
                        identified areas to improve the design system, for
                        example creating colored buttons, fixing some awkward
                        padding issues, and removing unnecessary bold font in
                        components.
                    </BodyText>

                    <CenteredImage>
                        <Image
                            src="/demomagicimages/image8.png"
                            alt="The minimal design system"
                            width={309}
                            height={385}
                        />
                    </CenteredImage>
                    <BodyText style={{ textAlign: "center" }}>
                        The minimal design system that exists in code which I
                        created in Figma components to be used for my high
                        fidelity designs.
                    </BodyText>

                    <TitleHighlighted>
                        Upon receiving user feedback, I iterated on my designs.
                    </TitleHighlighted>

                    <BodyText>
                        When I received useful feedback from end-users on early
                        versions of my designs, I incorporated their feedback to
                        improve the designs before they were built. For example:
                    </BodyText>

                    <FeatureList>
                        <FeatureItem>
                            Users mentioned that the lack of colors made it hard
                            to quickly understand the action and severity of a
                            button. Because of this, I added colors to the
                            buttons.
                        </FeatureItem>
                        <FeatureItem>
                            Users also mentioned that the copy of "Populate" on
                            one of the buttons was unclear as to whether it
                            meant populating the email in the inbox or
                            populating the template into the form. Based on that
                            feedback, I changed the copy to "Preview" which is
                            much more clear.
                        </FeatureItem>
                    </FeatureList>
                    <CenteredImage>
                        <Image
                            src="/demomagicimages/image10.png"
                            alt="Changes made on my designs based on user feedback."
                            width={590}
                            height={544}
                        />
                    </CenteredImage>
                    <BodyText style={{ textAlign: "center" }}>
                        Changes made on my designs based on user feedback.
                    </BodyText>

                    <TitleHighlighted>
                        The details matter a lot to me and I ensured the plugin
                        was delightful to use.
                    </TitleHighlighted>

                    <BodyText>
                        Here are three of the user interface details that were
                        important to maintain a discoverable and understandable
                        interface.
                    </BodyText>

                    <FeatureList>
                        <FeatureItem>
                            When users attempt to create a template with a name
                            that already exists, they get immediate feedback
                            before pressing the Confirm button – which would be
                            disabled anyways!
                        </FeatureItem>
                        <InlineImage
                            src="/demomagicimages/image4.png"
                            alt="Template name validation feedback"
                            width={237}
                            height={271}
                        />
                        <FeatureItem>
                            When users create or delete a template, they receive
                            confirmation feedback in a clear location.
                        </FeatureItem>
                        <InlineImage
                            src="/demomagicimages/image12.gif"
                            alt="Template creation confirmation"
                            width={260}
                            height={218}
                        />
                        <FeatureItem>
                            Buttons are disabled when their actions are not
                            possible or redundant. For example, you cannot use
                            the Preview button again when you've just pressed it
                            to load all its values into the form.
                        </FeatureItem>
                        <InlineImage
                            src="/demomagicimages/image2.png"
                            alt="Button disabled state"
                            width={330}
                            height={161}
                        />
                    </FeatureList>

                    <TitleHighlighted>
                        These changes had the desired effect.
                    </TitleHighlighted>

                    <BodyText>
                        Two months after launching these improvements, team
                        members had on average nine templates created in their
                        account. In addition, the amount of custom emails being
                        imported into the demo environment increased 43% year
                        over year in a given month. This suggests that
                        quantitatively the project had the desired outcome of
                        making it easier for people to demo Front live.
                    </BodyText>

                    <BodyText>
                        It should be noted that this entire project was
                        self-directed.
                    </BodyText>

                    <BodyText>
                        All in all, I hope this project makes it clear that I
                        love understanding how people use technology and
                        utilizing my design skills to create solutions to help
                        users succeed.
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
