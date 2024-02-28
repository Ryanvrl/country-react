import styled from "styled-components"

const Country = styled.main`
        color: ${(theme) => theme.theme.color};
        background-color: ${(theme) => theme.theme.background};
        transition: 0.2s ease-in-out;
        min-height: 90vh;
        padding: 30px 70px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        .flag-image {
            width: 450px;
        }

        .country-info {
            padding: 15px 0px;
            max-width: 550px;
        }

        .country-info .info {
            display: flex;
            flex-wrap: wrap;
            margin: 10px 0;
            align-items: center;
        }
        
        .infos-container {
            padding: 20px 0;
            display: flex;
        }

        .infos-main {
            margin-right: 20px;
        }

        .country-info .info span {
            margin-right: 5px;
            font-weight: 700;
        }

        .info-contrast {
            margin-right: 10px;
            background-color: ${(theme) => theme.theme.elements};
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
            flex-wrap: wrap;
            border-radius: 5px;
            margin-top: 5px;
        }

        @media (max-width: 1190px) {
            .country-info {
                max-width: 450px;
            }

            .flag-image {
                width: 350px;
            }
        }

        @media (max-width: 1010px) {
            flex-direction: column;
            justify-content: center;

            .flag-image {
                margin-bottom: 25px;
            }

            .country-info {
                max-width: 550px;
            }
        }

        @media (max-width: 500px) {
            padding: 30px 10px;

            .flag-image {
                width: 330px;
            }

            .infos-container {
                flex-direction: column;
            }
        }

        @media (max-width: 400px) {
            .flag-image {
                width: 290px;
            }
        }

`

export { Country }