import { DefaultTheme } from 'styled-components';

const color = {
    main: '#5655a5',
    sub: '#8887c0',
    background: '#f0f3fa',
    white: '#fff',
    black: '#000',
    blue: '#4457e1',
    blue100: '#100f65',
    critical: '#d9376d',
    major: '#406dfa',
    minor: '#299d38',
    stroke: '#bbbcdb',
    light: '#eeeef7',
    gray100: '#fafafa',
    gray200: '#f0f0f0',
    gray300: '#e8e6f0',
    gray400: '#E0e0e0',
    gray500: '#A9ABB8',
    gray600: '#858899',
    gray700: '#525463',
    gray800: '#3E404C',
    gray900: '#2B2D36',
    gray950: '#2B2D36',
};

export type ColorsTypes = typeof color;

const Theme: DefaultTheme = {
    color,
};

export default Theme;
