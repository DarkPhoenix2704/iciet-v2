import { ChakraProvider } from '@chakra-ui/react';
import Image from 'next/future/image';
import Head from 'next/head';
import Dates from '../components/Dates';
import NavBar from '../components/NavBar';
import NewsBlock from '../components/NewsBlock';
import Layout from '../layout';
import Header from '../public/Header.png';
import theme from '../theme';
import '@fontsource/open-sans';
import Marquee from '../components/Marquee';
import Footer from '../components/Footer';

const MyApp = ({ Component, pageProps }: { Component: any; pageProps: any }) => (
    <ChakraProvider theme={theme}>
        <Head>
            <title>
                IEEE International Conference on Innovation In Engineering and Technology 2023
            </title>
        </Head>
        <Image src={Header} alt="Header" width="100vw" />
        <Dates />
        <NavBar />
        <Layout>
            <NewsBlock />
        </Layout>
        <Marquee />
        <Component {...pageProps} />
        <Footer />
    </ChakraProvider>
);

export default MyApp;
