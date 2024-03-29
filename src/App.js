import React, { Component } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { styleReset} from 'react95';
import {DefaultAppBar} from './components/AppBar.js';
import {IntroWindow} from './components/IntroWindow.js';
import { ProficiencyWindow } from './components/ProficiencyWindow.js';
import original from "react95/dist/themes/original";
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
    background: teal;
  }
  ${styleReset}
`;

// const App = () => (
//   <div>
//     <GlobalStyles />
//     <ThemeProvider theme={original}>
//       <DefaultAppBar></DefaultAppBar>
//       <ProficiencyWindow></ProficiencyWindow>
//       <IntroWindow></IntroWindow>
//     </ThemeProvider>
//   </div>
// );

class App extends Component {
  render () {
    return(
      <div>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <DefaultAppBar></DefaultAppBar>
        <ProficiencyWindow></ProficiencyWindow>
        <IntroWindow></IntroWindow>
      </ThemeProvider>
    </div>
    );
  }
}

export default App;