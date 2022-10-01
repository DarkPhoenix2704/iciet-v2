import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: {
            '*': {
                fontFamily: 'Open Sans',
            },
        },
    },
    colors: {
        brand: {
            100: '#e2f1fb',
            900: '#0061A1',
        },
        accent: '#E87722',
    },
});

export default theme;
