"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

export default function SimpleButton(props) {
    console.log(props);
    const { title, className } = props;

    return (
        <StyledButton
            whileHover={{
                backgroundColor: "hsl(268 44% 85%)",
                transition: { duration: 0.3 },
            }}
            whileTap={{
                backgroundColor: "hsl(268 44% 75%)",
                transition: { duration: 0.1 },
            }}
            className={className}
        >
            {title}
        </StyledButton>
    );
}

const StyledButton = styled(motion.button)`
    width: fit-content;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    font-size: 1em;

    background-color: hsl(267 44% 95%);
    color: hsl(268 45% 39%);
    padding: 3px 7px 3px 7px;
`;
