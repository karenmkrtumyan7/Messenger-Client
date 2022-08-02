const lightModeColors = {
  bondiBlue: '#00A1AF',
  dodgerBlue: '#00B0FF',
  indigo: '#4D47C3',
  white: '#FFFFFF',
  titanWhite: '#F0EFFF',
  melrose: '#A7A3FF',
  silverChalice: '#B0B0B0',
  silverSand: '#C2C6CB',
  mercury: '#E6E6E6',
  dustyGray: '#999999',
  black: '#1a1a1a',
  porcelain: '#ECEFF1',
};

const theme = {
  borderWidthBase: 1,
  borderRadiusBase: 8,
  fontSizeBase: 16,
};

theme.typography = {
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,

  fontFamilyBase: 'Poppins, sans-serif',
};

theme.borderRadius = {
  borderRadiusDefault: `${theme.borderRadiusBase}px`,
  borderRadiusSmall: `${theme.borderRadiusBase + 1}px`,
};

theme.colors = lightModeColors;

export { theme };
