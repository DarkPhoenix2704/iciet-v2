import React from 'react';
import { Container, VStack } from '@chakra-ui/react';

const Layout = ({ children }: { children: React.ReactNode }) => (
    <VStack background="white">
        <Container
            display="flex"
            flexDirection="column"
            maxWidth={{ base: 'full', lg: 'container.xl' }}
        >
            {children}
        </Container>
    </VStack>
);

export default Layout;
