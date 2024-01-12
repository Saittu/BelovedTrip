import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * { 
        margin: 0;
        padding: 0;
        font: inherit;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-family: "Raleway", sans-serif;
    }

    body, input, textarea, button {
        font-weight: 400;
        font-size: 1.6rem;
        -webkit-font-smoothing: antialesed;
        -moz-os-font-smoothing: grayscale;        
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }
`; 