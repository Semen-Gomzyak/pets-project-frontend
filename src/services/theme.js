export const theme = {
  colors: {
    background: '#FDF7F2',
    black: '#111111',
    white: '#FFFFFF',
    accent: '#F59256',
    buttonAccent: '#FF6101',
    blue: '#3091EB',
    gradient: 'linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%)',

    text: {
      primary: '#111111',
      secondary: '#111321',
      gray: 'rgba(17, 17, 17, 0.6)',
    },
  },
  fontSizes: {
    xs: '12px',
    xss: '14px',
    xsss: '16px',
    s: '18px',
    m: '20px',
    ml: '24px',
    l: '36px',
    xl: '48px',
    xxl: '64px',
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256, 512],
  fontWeights: {
    normal: 400,
    semibold: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  borders: {
    none: 'none',
    normal: '2px solid',
  },
  radii: {
    none: '0',
    normal: '8px',
    bignormal: '40px',
    small: '20px',
    round: '50%',
  },
  shadows: {
    card: '7px 4px 14px rgba(49, 21, 4, 0.07)',
    modal: '7px 4px 14px rgba(0, 0, 0, 0.11)',
    time: '4px 4px 8px rgba(0, 0, 0, 0.25)',
    button: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
  fonts: {
    manrope: 'Manrope, sans-serif',
    logo: 'Pmanropeoppins, sans-serif',
  },

  device: {
    mobile: '(min-width: 320px)',
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 1280px)',
  },

  transition: '0.2s all linear',
};
