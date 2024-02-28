import { useContext, useEffect } from "react";
import styled from "styled-components";
import { ThemeContext, themes } from "../components/contexts/theme-context";
import { FaMoon } from "react-icons/fa";

const Header = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    
    return (
        <HeaderStyled theme={theme}>
            <a href="/" className="title"> Where in the world? </a>

            <button onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)} className="btn-change-theme">
                <FaMoon  className="icon-moon"/>
                {theme.name} Mode
            </button>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.div`
    padding: 25px 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${(theme) => theme.theme.color};
    background-color: ${(theme) => theme.theme.elements};
    transition: 0.2s ease-in-out;
    box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.7);;
    position: relative;
    min-height: 10vh;
    
    .title {
        cursor: pointer;
        text-decoration: none;
        color: ${(theme) => theme.theme.color};
        font-size: 30px;
        font-weight: 700;
    }

    .btn-change-theme {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px; 
        border-radius: 8px;
        border: none;
        color: ${(theme) => theme.theme.color};
        background-color: ${(theme) => theme.theme.elements};
        font-weight: 700;
        cursor: pointer;
        transition: 0.2s ease-in-out;
    }

    .icon-moon {
        margin-right: 5px;
    }

    @media (max-width: 650px) {
        padding: 25px;

        .title {
            font-size: 16px;
        }

        .btn-change-theme {
            font-size: 10px;
        }
    }
`

export { Header }