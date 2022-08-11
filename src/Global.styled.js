import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
html{
  height: 100%;
  font-size: 14px;
  font-family: ${(props) => props.theme.typography.fontFamilyBase};
  overflow:hidden;

  @media only screen and (max-width: 1366px) {
    font-size: 13px;
  }
  @media only screen and (max-width: 1280px) {
    font-size: 12px;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 11px;
  }

  button, input, select, textarea{
     font-family: ${(props) => props.theme.typography.fontFamilyBase};
  }
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`;

export default Global;