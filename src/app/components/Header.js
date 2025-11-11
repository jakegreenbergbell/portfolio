import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header(props) {
    const { className } = props;

    const HoverableDiv = (link, title) => {
        return (
            <StyledHeaderOption
                whileHover={{
                    opacity: 0.5,
                    transition: { duration: 0.3 },
                }}
            >
                <Link href={link}>{title}</Link>
            </StyledHeaderOption>
        );
    };

    return (
        <StyledHeader className={className}>
            {HoverableDiv("/portfolio", "portfolio")}
            {HoverableDiv("/about", "about")}
            {/* {HoverableDiv("/home/photography", "photography")} */}
            {/* {HoverableDiv("/home/writing", "writing")} */}
        </StyledHeader>
    );
}

const StyledHeaderOption = styled(motion.div)`
    border-radius: 5px;
`;

const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 25px;
    font-weight: 400;
`;
