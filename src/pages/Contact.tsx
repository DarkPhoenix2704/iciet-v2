import { Heading, Flex, Box, Text, AspectRatio } from '@chakra-ui/react';
import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import Layout from '../layout';

const Contact = () => (
    <Layout>
        <Heading fontWeight="600" marginTop="18px" fontSize="26px">
            Contact Us
        </Heading>
        <Flex flexDirection={{ base: 'column', lg: 'row' }} paddingBlock="18px">
            <Box
                width={{ base: '100%', lg: '50vw' }}
                textAlign="center"
                paddingInline="18px"
                paddingBlock="18px"
            >
                <Box transform={{ base: '', sm: 'translateY(30%)' }}>
                    <Heading fontWeight="normal" fontSize="18px">
                        For Enquiry Please Contact
                    </Heading>
                    <Text fontSize="14px" fontWeight="300" marginBlock="16px" marginInline="8px">
                        Rosna P Haroon,
                        <br /> Conference General Co-Chair
                        <br /> Email: rosnapharoon@icet.ac.in
                    </Text>
                    <Text fontSize="14px" fontWeight="300" marginBlock="16px" marginInline="8px">
                        Ansar Jamal,
                        <br /> Conference General Co-Chair
                        <br /> Email: ansarjamal@icet.ac.in
                    </Text>
                    <Text fontSize="14px" fontWeight="300" marginBlock="16px" marginInline="8px">
                        Ilahia College of Engineering and Technology,
                        <br /> Muvattupuzha, Kerala, India
                        <br /> PH:0485 2549145, 8078303883
                        <br /> e-mail: ilahia@icet.ac.in
                    </Text>
                </Box>
            </Box>
            <Box width={{ base: '98vw', lg: '50vw' }}>
                <LoadScript googleMapsApiKey="AIzaSyAcVUpjSZSb2og3l7K6v6enQCLYdCSCIHM">
                    <AspectRatio ratio={4 / 3}>
                        <GoogleMap
                            mapContainerStyle={{ width: '100%', height: '100%' }}
                            center={{ lat: 10.028339, lng: 76.597629 }}
                            zoom={15}
                        >
                            <Marker position={{ lat: 10.028339, lng: 76.597629 }} />
                        </GoogleMap>
                    </AspectRatio>
                </LoadScript>
            </Box>
        </Flex>
    </Layout>
);

export default Contact;
