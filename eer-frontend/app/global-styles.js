import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    font-family: 'Roboto', sans-serif;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }
  * {
    font-family: 'Roboto', sans-serif;
  }

  body.fontLoaded {
    font-family: 'Roboto', sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Roboto', sans-serif;
    line-height: 1.5em;
  }
`;
