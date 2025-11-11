import styled from "styled-components";
import Image from "next/image";

export const CenteredImage = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
`;

export const InlineImage = styled(Image)`
    margin-bottom: 12px;
`;
