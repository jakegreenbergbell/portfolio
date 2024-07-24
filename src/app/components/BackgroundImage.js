import Image from "next/image";
import styled from "styled-components";

export default function BackgroundImage(props) {
    const { src, alt } = props;
    return (
        <StyledBackgroundImage
            src={src}
            height={850}
            width={850}
            priority={true}
            alt={alt}
        />
    );
}

const StyledBackgroundImage = styled(Image)`
    position: fixed;
    z-index: -10;
    height: 100%;
    width: 100vw;
    object-fit: cover;
    opacity: 0.7;
`;
