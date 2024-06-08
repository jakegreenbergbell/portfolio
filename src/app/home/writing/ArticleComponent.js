import Image from "next/image";
import styled from "styled-components";

export default function ArticleComponent(props) {
    const { title, date, imageSrc, alt, link, preview } = props;
    return (
        <WritingContainer>
            <ImageContainer>
                <Image src={imageSrc} alt={alt} objectFit="cover" fill />
            </ImageContainer>
            <TextContainer>
                <Title>{title}</Title>
                <Date>{date}</Date>
                <Preview>
                    {preview.map((text) => {
                        return <PreviewLine key={text}>{text}</PreviewLine>;
                    })}
                </Preview>
                <Link href={link}>Read more</Link>
            </TextContainer>
        </WritingContainer>
    );
}

const ImageContainer = styled.div`
    position: relative;
    height: 300px;
    width: 1000px;
    min-width: 400px;
    max-width: 400px;

    @media (max-width: 750px) {
        height: 300px;
        width: 1000px;
        min-width: 300px;
        max-width: 300px;
    }
`;
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const WritingContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    padding-top: 50px;
    padding-bottom: 40px;
    border-bottom: 1px solid white;

    @media (max-width: 750px) {
        flex-direction: column;
    }
`;

const Date = styled.div`
    color: var(--grey-rgb);
`;

const Title = styled.div`
    font-size: clamp(0.2rem, 0.5rem + 50vw, 1.5rem););
`;

const Preview = styled.div`
    color: var(--grey2-rgb);
    font-size: var(--small-fs);
`;

const PreviewLine = styled.p`
    padding-bottom: 10px;
`;

const Link = styled.a`
    text-decoration: underline;
`;
