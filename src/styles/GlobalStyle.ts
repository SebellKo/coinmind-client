import { reset } from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`${reset}
    button {
        outline: none;
        border: 0;
        cursor: pointer;
    }
`;

export default GlobalStyle;
