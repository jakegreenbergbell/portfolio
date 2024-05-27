import styled from "styled-components";
import Link from "next/link";

export default function Header(props) {
    const { className, children } = props;

    return (
        <StyledHeader className={className}>
            <Link href="/home/portfolio">portfolio</Link>
            <Link href="/home/photography">photography</Link>
            <Link href="/home/writing">writing</Link>
            <Link href="/home/about">about me</Link>
        </StyledHeader>
    );
}

const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 25px;
`;