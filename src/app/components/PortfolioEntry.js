"use client";

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PortfolioEntry(props) {
    const { title, subtitle, photoSrc, photoAlt, link } = props;
    return (
        <PortolioEntryContainer href={link}>
            <PhotoContainer>
                <Image
                    src={photoSrc}
                    alt={photoAlt}
                    placeholder="blur"
                    blurDataURL="/blur.png"
                    objectFit="cover"
                    fill
                />
            </PhotoContainer>
            <TextContainer
                whileHover={{
                    opacity: 0.5,
                    transition: { duration: 0.3 },
                }}
            >
                <Header>{title}</Header>
                <Subtitle>{subtitle}</Subtitle>
            </TextContainer>
        </PortolioEntryContainer>
    );
}

const PhotoContainer = styled.div`
    position: relative;
    width: 170px;
    height: 113px;
    overflow: hidden;

    img {
        transition: transform 0.3s ease-in-out;
    }
`;

const PortolioEntryContainer = styled(Link)`
    display: flex;
    flex-direction: row;
    width: auto;
    height: auto;
    gap: 18px;
    filter: grayscale(100%);
    overflow: hidden;

    &:hover {
        filter: grayscale(0%);
        transition: filter 0.3s ease-in-out;
        cursor: pointer;

        ${PhotoContainer} img {
            transform: scale(1.03);
        }
    }
`;

const TextContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: left;
    width: auto;
    height: auto;
`;

const Header = styled.div`
    font-size: var(--header2-fs);
`;

const Subtitle = styled.div`
    font-size: var(--subtitle2-fs);
`;
