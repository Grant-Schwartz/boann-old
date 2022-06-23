import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#13284F",
    800: "#274682",
    700: "#4169B5",
    600: "#6190E8",
    500: "#ACC8FC",
    400: "#F0F5FF"
  },
}

const fonts = {
  heading: "Inter",
  body: "Inter"
}

const components = {
  Heading: {
    baseStyle: {
      letterSpacing: "-0.05em"
    }
  },
  Text: {
    baseStyle: {
      letterSpacing: "0.03em"
    }
  }
}

const theme = extendTheme({ colors, fonts, components });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
