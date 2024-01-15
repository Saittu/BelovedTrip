import styled from "styled-components";

export const HeaderLeft = styled.div`
    max-width: 8rem;
    height: 100vh;
    background: ${({ theme }) => theme.COLORS.PURPLE_200};
    position: fixed;
`;

export const HeaderTop = styled.div`
    width: 100%;
    height: 5.5rem;
    background: ${({ theme }) => theme.COLORS.PURPLE_200};
    border-bottom: 2.5px solid ${({ theme }) => theme.COLORS.ORANGE};

    display: flex;
    align-items: center;
    justify-content: center;


    h1 {
        font-size: 3.8rem;
        font-weight: 600;
    }
`;

export const ButtonContent = styled.button`
    width: 8rem;
    height: 8rem;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: transparent;
    border: none;

    
    &:hover {
        color: ${({ theme }) => theme.COLORS.ORANGE};
        filter: none;
        transition: 0.5s;

        background-color: ${({ theme }) => theme.COLORS.PURPLE_300};
    }

    color: ${({ theme }) => theme.COLORS.WHITE};
    svg {
        width: 2.5rem;
        height: 2.5rem;
    }



    span {
        margin-top: 0.5rem;
        font-size: 1.2rem;

    }
`;