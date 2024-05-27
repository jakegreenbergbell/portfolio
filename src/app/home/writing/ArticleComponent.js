import Image from "next/image";
import styled from "styled-components";

export default function ArticleComponent(props) {
    const { title, date, imageSrc, alt, link } = props;

    return (
        <WritingContainer>
            <ImageContainer>
                <Image
                    src={imageSrc}
                    style={{ objectFit: "contain" }}
                    fill={true}
                    alt={alt}
                />
            </ImageContainer>
            <TextContainer>
                <div>{title}</div>
                <div>{date}</div>
                <a href={link}>test</a>
            </TextContainer>
        </WritingContainer>
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
