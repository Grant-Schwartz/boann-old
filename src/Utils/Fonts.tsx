import { Global } from "@emotion/react";

export const Fonts = () => (
  <Global
    styles={`
    @font-face {
      font-family: 'Inter';
      src: url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap') format('woff');
    }
    `}
  />
);