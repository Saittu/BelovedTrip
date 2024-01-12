import styled from "styled-components";

import BackgroundImg from "../../assets/BackgroundImg.jpg"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: stretch;

    header{
        margin-top: 2.8rem;

        a {
            margin-right: 2.8rem;
            font-weight: 600;
            font-size: 1.5rem;
        }

        a:hover {
            color: ${({ theme }) => theme.COLORS.WHITE};
            border-bottom: 2px solid ${({ theme }) => theme.COLORS.ORANGE};
            transition: 0.5s;
        }
    }

`;

export const Form = styled.form`
    padding: 0 8.3rem;
    display: flex;
    flex-direction: column;


    > h1 {
        font-weight: 600;

        font-size: 4rem;

        padding-top: 10rem;
    }

    > p {
        font-weight: 400;
        font-size: 1.4rem;
        margin: 1.5rem 0 3rem 0;
        
    }

    .OptionsUser {
        display: flex;
        align-items:end;
        gap: 7rem;
    }


`;


export const Background = styled.div`
    flex: 1;
    background-size: cover;
    opacity: 0.7;
    background: url(${BackgroundImg}) no-repeat center;
`;