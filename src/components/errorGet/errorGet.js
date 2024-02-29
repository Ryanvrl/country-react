import styled from "styled-components";

const ErrorGet = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(theme) => theme.theme.color}; 
    background-color: ${(theme) => theme.theme.background}; 
    min-height: 90vh;
`

export  { ErrorGet }