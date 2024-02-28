import styled from "styled-components";

const CountryStyled = styled.li`
        color: ${(theme) => theme.theme.color};
        background-color: ${(theme) => theme.theme.elements};
        max-width: 280px;
        margin: 10px;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
                transform: scale(1.05);
        }

        .flag {
                border-radius: 5px 5px 0 0;
                width: 280px;
                height: 150px;
        }

        .infos-country {
                padding: 10px 20px;
        }

        .infos-country .name-country {
                margin: 20px 0;
        }

        .infos-country span {
                font-weight: 500;
        }

        .info {
                margin: 10px 0;
        }

`

export { CountryStyled }