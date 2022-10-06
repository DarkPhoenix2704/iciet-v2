import { Heading, Container } from '@chakra-ui/react';
import React from 'react';
import Layout from '../layout';

const NotFound = () => (
    <Layout>
        <Container minH="xl" minW="fit-content">
            <Heading fontWeight="600" marginTop="18px" textAlign="center" fontSize="26px">
                404 Not Found
            </Heading>
        </Container>
    </Layout>
);
export default NotFound;
