import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import Home from './pages/Home';
import NavBar from './components/NavBar';

const App = () => (
    <ChakraProvider>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    </ChakraProvider>
);

export default App;
