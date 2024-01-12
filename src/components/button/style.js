import styled from "styled-components";

export const Container = styled.button`
    width: clamp(20.7rem, 0rem + 6.432vw, 27.7rem);
    height:4.6rem;

    padding: 0 1.6rem;
    margin: 5rem 0;

    font-weight: 600;

    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND};
    border: none;
    border-radius: 0.8rem;
    box-shadow: 0 0 10px 0 ${({ theme }) => theme.COLORS.ORANGE};


    display: flex;
    align-items: center;
    justify-content: center;
`;