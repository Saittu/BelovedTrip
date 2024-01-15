import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: clamp(30rem, 0rem + 6.789vh, 40rem);

    border: none;
    background-color: ${({ theme }) => theme.COLORS.PURPLE_200};
    color: ${({ theme }) => theme.COLORS.WHITE};

    margin: 0.6rem 0 1rem 0 ;
    resize: none;

    padding: 1.6rem;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.BACKGROUND};
        font-weight: 600;
    }
`;