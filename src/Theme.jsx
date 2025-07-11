import { extendTheme, theme as base, withDefaultVariant } from "@chakra-ui/react"

const breakpoints = {
  sm: '320px',
  md: '500px',
  lg: '720px',
  xl: '960px',
  '2xl': '1200px',
}

export const theme = extendTheme({
  breakpoints, 
  fonts: {
    heading: `'Roboto Slab', ${base.fonts.heading}`,
    body: `'Montserrat', sans-serif`,
  },
  styles: {
    global: {
        body: {
            bg: 'gray.900'
        }
    }
  },
  components: {
    Button: {
      baseStyle: {
      _hover: {
        color: 'purple',
        textDecoration:'underline'
      }
    },
      defaultProps: {
        colorScheme: 'green'
        
      }
    },
    Input:{
      defaultProps: {
        focusBorderColor: 'pink'
      }
    },
    Select:{
      baseStyle: {
        _focus: {
          borderColor: 'blue'
        }
      }
    },
    Textarea:{
      defaultProps: {
        focusBorderColor: 'pink.500'
      }
    }
  }
});