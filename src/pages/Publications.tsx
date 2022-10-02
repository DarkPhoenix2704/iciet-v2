import { Container, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import Layout from '../layout';

const Publications = () => (
    <Layout>
        <Heading fontWeight="600" marginTop="18px" fontSize="26px">
            Publications
        </Heading>
        <Container minH="xl" minW="fit-content">
            <Text fontSize="16px" marginBlock="18px" lineHeight="25px" textAlign="left">
                All Accepted papers will be published in IEEE Xplore
            </Text>
        </Container>
    </Layout>
);
export default Publications;
