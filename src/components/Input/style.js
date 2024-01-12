import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 6.8rem;

    background-color: ${({ theme }) => theme.COLORS.PURPLE_200};

    display: grid;
    grid-template-areas: "title" "input" "svg" ;
    grid-template-rows: 2rem 5rem;
    margin-top: 0.6rem;

    &:focus-within {
        border-left: 3px solid ${({ theme }) => theme.COLORS.ORANGE};
    }
       
    p {
        color: ${({ theme }) => theme.COLORS.PURPLE_300};
        font-weight: 600;
        padding: 0 1.6rem;
        margin-top: 0.5rem;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;

    }

        input {
            grid-area: input;
            background: transparent;
            width: 100%;
            height: 4.8rem;

            border: none;
            border: 5px;

            padding: 0 1.6rem;
            margin: 1rem 0;
            color: ${({ theme }) => theme.COLORS.WHITE};

            &:focus {
                outline: 0;
            }

            input[type="password"] {
                -webkit-text-security: disc;
            }

        }

        svg {
            grid-area: svg;
            color: ${({ theme }) => theme.COLORS.PURPLE_300};
            margin: 0 2rem;
        }
`;