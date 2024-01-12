import styled from "styled-components";

import { GoCheck } from "react-icons/go";

export const Container = styled.div`
    display: flex;
    align-items: center;

    margin: 1rem 0 0 ;


    > .Checkbox {
        margin-right: 0.8rem;
        display: none;
    }

    > label {
        font-size: 1.4rem;
    }

    .Checkbox, label{
        cursor: pointer;
    }

    

    .Checkbox + label::before {
        content: "";
        display: inline-block;
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 5px;
        margin-right: 5px;
        border: 2px solid ${({ theme }) => theme.COLORS.ORANGE};
        margin-bottom: -2px;
        
    }



    input[type="checkbox"]:checked + label::before {
        mask: url(${GoCheck}) no-repeat center;
        >svg {
            font-size: 20px;
            color: ${({ theme }) => theme.COLORS.ORANGE};
        }
    }

    input[type="checkbox"]:checked + label::after {
        content: "";
        display: inline-block;
        width: 1.8rem;
        height: 1.8rem;
        margin-bottom: -2px;
  }
`;
 
