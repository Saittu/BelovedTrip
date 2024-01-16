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
    
    .ContainerContent {
        display: flex;
        justify-content: center;
        

        section:first-child{
            border-right-color: ${({ theme }) => theme.COLORS.ORANGE};
            border-right-width: 3px;
            border-right-style: solid;
            padding-right: 5rem;
        }

        

    #SecondSection {
        margin-left: 2rem;
    }

    .ValueContact {
        display: flex;
        align-items: center;

        gap: 0.8rem;



        p {
            font-size: 1.8rem;
        }

        svg {
            font-size: 2rem;
        }
    }

`;