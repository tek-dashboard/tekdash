// import React, { Component } from "react";
// import { withAuth0 } from "@auth0/auth0-react";
// import { ColorModeContext, useMode } from "../../theme.js";
// import { CssBaseline, ThemeProvider } from "@mui/material";

// class DashBoardHome extends Component {
//   const [theme, colorMode] = useMode();

//   render() {
//     return (
//       <ColorModeContext.Provider value={colorMode}>
//         <ThemeProvider theme={theme}>
//           <section className="app">
//             <h1>Secret Cats!</h1>
//           </section>
//         </ThemeProvider>
//       </ColorModeContext.Provider>
//     );
//   }
// }

// export default withAuth0(DashBoardHome);



import { withAuth0 } from "@auth0/auth0-react";
import { ColorModeContext, useMode } from "../../theme.js";
import { CssBaseline, ThemeProvider } from "@mui/material";

function DashBoardHome (){
  const [theme, colorMode] = useMode();

 
    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <section className="app">
            <h1>Secret Cats!</h1>
          </section>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  }


export default withAuth0(DashBoardHome);