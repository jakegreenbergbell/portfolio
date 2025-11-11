import styled from "styled-components";

export const FeatureList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 12px 0 12px 36pt;
    li::marker {
        font-size: 20px;
    }
`;

export const FeatureItem = styled.li`
    font-size: 11pt;
    font-family: "Arial", sans-serif;
    color: #000000;
    list-style-type: disc;

    li::marker {
        font-size: 20px;
    }
`;

export const SubFeatureList = styled.ul`
    padding: 0;
    margin: 0px 0 0 32pt;
    list-style-type: circle;

    li::marker {
        font-size: 20px;
    }
`;

export const SubFeatureItem = styled.li`
    font-size: 11pt;
    font-family: "Arial", sans-serif;
`;
