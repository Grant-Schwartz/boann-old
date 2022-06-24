import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react";
import { AuthProvider } from 'Utils/Auth';

const colors = {
  brand: {
    800: "#13284F",
    700: "#274682",
    600: "#4169B5",
    500: "#6190E8",
    400: "#ACC8FC",
    300: "#F0F5FF"
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
      letterSpacing: "0.03em",
      color: 'gray.500'
    }
  },
  Input: {
    baseStyle: {
      borderColor: "brand.500"
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
