import { ChakraProvider } from '@chakra-ui/react';
import Image from 'next/future/image';
import Dates from '../components/Dates';
import NavBar from '../components/NavBar';
import NewsBlock from '../components/NewsBlock';
import Layout from '../layout';
import Header from '../public/Header.svg';
import theme from '../theme';
import '@fontsource/open-sans';

const MyApp = ({ Component, pageProps }: { Component: any; pageProps: any }) => (
    <ChakraProvider theme={theme}>
        <Image src={Header} alt="Header" width="100vw" />
        <Dates />
        <NavBar />
        <Layout>
            <NewsBlock />
        </Layout>
        <Component {...pageProps} />
    </ChakraProvider>
);

export default MyApp;
