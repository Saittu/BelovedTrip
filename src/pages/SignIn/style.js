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
            font-weight: 600;
            font-size: 1.5rem;
        }

        a:first-child {
            margin-right: 2.8rem;
        }

        a:hover {
            color: ${({ theme }) => theme.COLORS.WHITE};
            border-bottom: 2px solid ${({ theme }) => theme.COLORS.ORANGE};
            transition: 0.5s;
        }
    }

`;

export const Form = styled.form`
    padding: 0 6.3rem;
    margin-right: clamp(2rem, 0rem + 6.245vw, 7rem);
    display: flex;
    flex-direction: column;

    

    > h1 {
        font-weight: 600;

        font-size: 4rem;

        padding-top: clamp(1rem, 0rem + 6.487vh, 10rem);

        margin-top: clamp(2rem, 0rem + 10.248vh, 15rem);
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

        margin-top: 1rem;
    }

    button {
        width: clamp(22.7rem, 0rem + 6.432vw, 27.7rem);
    }

    .endSignIn {
        display:flex;
        align-items: center;
        gap: 2rem;

        a:first-child {
            font-size: 1.6rem;
            border-bottom: 1px solid ${({ theme }) => theme.COLORS.PURPLE_100};
        }

        svg {
            font-size: 2.8rem;
            color: ${({ theme }) => theme.COLORS.PURPLE_100};
        }
    }


`;


export const Background = styled.div`
    flex: 1;
    object-fit: cover;
    opacity: 0.7;
    background: url(${BackgroundImg}) no-repeat ;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    -o-background-size: cover;
    
`;