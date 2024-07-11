import styled from "styled-components";
import Link from "next/link";

export default function Header(props) {
    const { className, children } = props;

    return (
        <StyledHeader className={className}>
            <Link href="/home">home</Link>
            <Link href="/home/portfolio">portfolio</Link>
            <Link href="/home/photography">photography</Link>
            <Link href="/home/writing">building</Link>
            <Link href="/home/about">about</Link>
        </StyledHeader>
    );
}

const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 25px;
    font-style: italic;
`;
