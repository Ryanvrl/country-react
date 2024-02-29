import { AiOutlineLoading } from "react-icons/ai";
import styled from "styled-components";
import { ThemeContext } from "../contexts/theme-context";
import { useContext } from "react";

const Loading = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <LoadingComp theme={theme}>
                <h1 className="text">Loading</h1>
                <AiOutlineLoading color="red" className="loading-icon"/>
        </LoadingComp>
    )
}

const LoadingComp = styled.div`
    height: 90vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Rubik;
    color: ${(theme) => theme.theme.color}; 
    background-color: ${(theme) => theme.theme.background}; 
    padding: 20px 0;
    
    .loading-icon {
        margin-left: 5px;
        animation: rotate 0.3s infinite;
    }

    @keyframes rotate {
        from {
            transform: rotate(0deg);
            
        }
    
        to {
            transform: rotate(360deg);
        }
    }
`

export { Loading }