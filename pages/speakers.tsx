import { Container, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import Layout from '../layout';

const Speakers = () => (
    <Layout>
        <Container minH="xl">
            <Heading fontWeight="600" marginBlock="18px" textAlign="center" fontSize="26px">
                Keynote Speakers
            </Heading>
            <Image src="/poster.jpg" width="100%" alt="Poster" />
        </Container>
    </Layout>
);

export default Speakers;
