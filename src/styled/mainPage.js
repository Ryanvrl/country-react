import styled from "styled-components";

const MainPage = styled.main`
        padding: 40px 70px;
        color: ${(theme) => theme.theme.color};
        background-color: ${(theme) => theme.theme.background};
        transition: 0.2s ease-in-out;
        min-height: 90vh;
       
        .filters {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .input {
            display: flex;
            align-items: center;
            padding: 0px 10px;
            background-color: ${(theme) => theme.theme.elements};
            width: 500px;
            border-radius: 5px;
            box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);
        }

        .search-img {
            margin: 0px 10px;
        }

        .search-input {
            background-color: transparent;
            border: 0;
            outline: none;
            padding: 15px;
            width: 100%;
            color: ${(theme) => theme.theme.color};
        }

        .filter-region {
            background-color: ${(theme) => theme.theme.elements};
            padding: 15px 10px;
            outline: none; 
            border: none;
            gap: 20px;
            border-radius: 5px;
            color: ${(theme) => theme.theme.color};
            box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);   
        } 

        .list-countries {
            list-style: none;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin: 40px 0;
        }

        .link {
            text-decoration: none;
        }

        @media (max-width: 1050px) {
            padding: 40px 30px;
        }

        @media (max-width: 750px) {
            .filters {
                flex-direction: column;
                align-items: start;
            }

            .filter-region {
                margin: 10px 0;
            }
        }

        @media (max-width: 550px) {
            padding: 10px;

            .input {
                width: 90%;
            }
        }
`


export { MainPage }