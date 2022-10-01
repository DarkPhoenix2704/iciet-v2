import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: {
            '*': {
                fontFamily: 'Poppins',
            },
        },
    },
    colors: {
        brand: '#0061A1',
        accent: '#E87722',
    },
});

export default theme;
