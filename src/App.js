import React, { Fragment } from "react";
import { GlobalStyle } from "./ui/styles/globalStyles";
import Content from "./ui/components/Content";
import { NotificationProvider } from "./application/providers/NotificationsProvider";
import { ThemeProvider } from "theme-ui";
import { theme } from "./theme/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NotificationProvider>
        <Fragment>
          <Content />
        </Fragment>
      </NotificationProvider>
    </ThemeProvider>
  );
}

export default App;
