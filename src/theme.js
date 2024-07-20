import { createTheme } from '@mui/material/styles';
import Sahel from './assets/fonts/Sahel.woff'

const theme = createTheme({

    "palette": {
        "primary": {
            "50": "#f3f9ec",
            "100": "#e1f0d0",
            "200": "#cde6b3",
            "300": "#badc96",
            "400": "#abd47f",
            "500": "#008f3a",
            "600": "#8ebc60",
            "700": "#7aa755",
            "800": "#68934c",
            "900": "#4a703b",
            "solidHoverBg": "var(--joy-palette-primary-outlinedColor)"
        },
        "econdary": {
            "50": "#f3e6f0",
            "100": "#e2bfdc",
            "200": "#cf96c5",
            "300": "#bb6dae",
            "400": "#ab509d",
            "500": "#9c378d",
            "600": "#903287",
            "700": "#7f2c7f",
            "800": "#702776",
            "900": "#561f65"
        },
        "neutral": {
            "50": "#e8eaed",
            "100": "#c5cbd5",
            "200": "#a1a9b9",
            "300": "#7e889b",
            "400": "#646f88",
            "500": "#4a5777",
            "600": "#434f6e",
            "700": "#3b4663",
            "800": "##343c56",
            "900": "#292c3c"
        },
        "danger": {
            "50": "#fde3e8",
            "100": "#f9b7c5",
            "200": "#f3899f",
            "300": "#ec5a7b",
            "400": "#e6365f",
            "500": "#df0f46",
            "600": "#cf0745",
            "700": "#bb0042",
            "800": "#a70040",
            "900": "#85003b"
        },
        "success": {
            "50": "#e8fde9",
            "100": "#c7f8c7",
            "200": "#9df3a2",
            "300": "#6aee78",
            "400": "#28e855",
            "500": "#00e22d",
            "600": "#00d025",
            "700": "#00bb1a",
            "800": "#00a60a",
            "900": "#008100"
        },
        "warning": {
            "50": "#f9e9e7",
            "100": "#faccbe",
            "200": "#f8ab94",
            "300": "#f58b69",
            "400": "#f47249",
            "500": "#f35b2c",
            "600": "#e85528",
            "700": "#da4e23",
            "800": "#cc4820",
            "900": "#b23c1a"
        }

    },
    typography: {
        fontFamily: 'Sahel, Arial',
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
        @font-face {
          font-family: 'Sahel';
          font-style: normal;
          font-display: swap;
          font-weight: 300;
          src: local('Sahel'), local('Sahel-Regular'), url(${Sahel}) format('woff');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
        },
    }
});

export default theme;