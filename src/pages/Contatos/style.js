import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    
    
    .Contact {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 3.1rem;

        h1 {
            font-size: 2.6rem;
            font-weight: 600;
        }

        p{
            font-size:1.6rem;
            border-top: 2px solid ${({ theme }) => theme.COLORS.ORANGE};
        }
    }

    .Menssege {
        display: flex;
        gap: 1rem;
    }

    section > button {
        margin-top: 0.5rem;
    }

    section > h2 {
        font-size: 1.8rem;
        font-weight: 600;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }
    

`;