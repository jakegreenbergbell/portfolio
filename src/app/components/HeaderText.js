import styled from "styled-components";

export default function HeaderText(props) {
    const { className, children } = props;

    return <StyledText className={className}>{children}</StyledText>;
}

const StyledText = styled.h1`
    font-size: var(--header-fs);
    font-weight: 600;
`;
