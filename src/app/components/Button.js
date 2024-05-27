import styled from "styled-components";
import { motion } from "framer-motion";

export default function SimpleButton(props) {
    console.log(props);
    const { title, className } = props;

    return (
        <StyledButton
            whileHover={{
                backgroundColor: "rgb(162 132 197)",
                transition: { duration: 0.1 },
            }}
            whileTap={{
                backgroundColor: "rgb(146 103 196)",
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

    background-color: rgb(146 103 196);
    padding: 3px 7px 3px 7px;
`;
