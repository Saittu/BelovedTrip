import styled from "styled-components";

import Check from "../../assets/check.svg"

export const Container = styled.div`
    display: flex;
    align-items: center;

    margin: 1rem 0 0 ;

    label {
        display: flex;
        align-items: center;
        gap: 0.7rem;
        
        margin: 0;
    }

    input {
        display: none;
    }

    .Checkbox + label {
        cursor: pointer;
    }

    label::before{
        content: '';
        width: 1.8rem;
        height: 1.8rem;
        display: block;

        border: 2px solid ${({ theme }) => theme.COLORS.ORANGE};
        border-radius: 5px
    }

    .Checkbox:checked + label::before {
        background: url(${Check}) no-repeat center center;
       
    }


   
`;
 
