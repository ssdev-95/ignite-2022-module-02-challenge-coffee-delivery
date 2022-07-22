import { extendTheme } from '@chakra-ui/react'

/*
 * font-family: 'Baloo 2', cursive;
 * font-family: 'Roboto', sans-serif;
 */

export const defaultTheme = extendTheme({
  colors: {
    white: '#FFFFFF',
    yellow: {
      dark: '#C47F17',
      medium: '#DBAC2C',
      light: '#F1E9C9',
    },
    purple: {
      dark: '#4B2995',
      medium: '#8047F8',
      light: '#EBE5F9',
    },
    base: {
      bg: '#FAFAFA',
      card: '#F3F2F2',
      input: '#EDEDED',
      button: '#E6E5E5',
      hover: '#D7D5D5',
      label: '#8D8686',
      text: '#574F4D',
      subtitle: '#403937',
      title: '#272221',
    },
  },
})
