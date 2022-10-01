import { Container, Heading } from '@chakra-ui/react';
import React from 'react';
import Layout from '../layout';

const Speakers = () => (
    <Layout>
        <Container minH="xl">
            <Heading fontWeight="600" marginBlock="18px" fontSize="26px">
                Speakers Will be Announced Soon
            </Heading>
        </Container>
    </Layout>
);

export default Speakers;
