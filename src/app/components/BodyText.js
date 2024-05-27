import styled from "styled-components";

export default function BodyText(props) {
    const { className, children } = props;

    return <StyledText className={className}>{children}</StyledText>;
}

const StyledText = styled.div`
    font-size: var(--body-fs);
    font-weight: 200;
`;
