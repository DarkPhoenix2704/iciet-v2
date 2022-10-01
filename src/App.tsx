import { ChakraProvider, Image } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from '../assets/Header.svg';
import theme from './theme';
import Home from './pages/Home';
import NavBar from './components/NavBar';
// import Marquee from './components/Marquee';

const App = () => (
    <ChakraProvider theme={theme}>
        <BrowserRouter>
            <Image src={Header} alt="Header" width="100vw" />
            <NavBar />
            {
                // <Marquee />
            }
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    </ChakraProvider>
);

export default App;
