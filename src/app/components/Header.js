import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header(props) {
    const { className } = props;

    const HoverableDiv = (link, title) => {
        return (
            <motion.div
                whileHover={{
                    opacity: 0.5,
                    transition: { duration: 0.3 },
                }}
            >
                <Link href={link}>{title}</Link>
            </motion.div>
        );
    };

    return (
        <StyledHeader className={className}>
            {HoverableDiv("/home", "home")}
            {HoverableDiv("/home/portfolio", "portfolio")}
            {HoverableDiv("/home/photography", "photography")}
            {/* {HoverableDiv("/home/writing", "writing")} */}
            {HoverableDiv("/home/about", "about")}
        </StyledHeader>
    );
}

const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 25px;
    font-style: italic;
    font-weight: 200;
`;
