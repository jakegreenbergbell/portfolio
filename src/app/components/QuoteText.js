import styled from "styled-components";

export default function QuoteText(props) {
    const { className, children } = props;

    return <StyledText className={className}>{children}</StyledText>;
}

const StyledText = styled.div`
    font-size: var(--body-fs);
    font-weight: 100;
    color: rgb(150 150 150);

    margin-top: 50px;
    margin-bottom: 20px;
`;
