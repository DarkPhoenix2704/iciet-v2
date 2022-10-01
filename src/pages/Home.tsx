import { Heading, Box, Text, UnorderedList, ListItem, Divider, Button } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../layout';

const Home = () => (
    <Layout>
        <Box color="white" marginBlock="8px" bg="accent" borderRadius="9px" padding="12px">
            <Heading fontWeight="600" fontSize="18px">
                Important News
            </Heading>
            <UnorderedList marginBlockStart="8px">
                <ListItem>
                    <Text fontSize="14px">
                        We are currently working on a new website. Please be patient with us.
                    </Text>
                </ListItem>
                <ListItem>
                    <Text fontSize="14px">Registration Starting Soon</Text>
                </ListItem>
            </UnorderedList>
        </Box>
        <Heading fontWeight="600" marginTop="18px" fontSize="26px">
            IEEE International Conference on Innovation In Engineering and Technology
            <br /> 2023
        </Heading>
        <Divider
            marginBlockStart="9px"
            borderColor="#9a9a9a"
            opacity="1"
            borderBottomWidth="1px"
            width="80%"
        />
        <Button
            marginBlockStart="9px"
            width="125px"
            paddingBlock="18px"
            background="brand"
            color="white"
            _hover={{ background: 'black', color: 'white' }}
        >
            <NavLink to="/register">Register Now</NavLink>
        </Button>
        <Text fontSize="16px" marginBlock="18px" textAlign="justify" lineHeight="25px">
            ICIET-2022 is the IEEE International Conference organized by Ilahia College of
            Engineering and Technology, Muvattupuzha, Kerala, India. This conference aims to bring
            together the researchers, engineers, academicians as well as industrial professionals
            from all over the world to present their research results and development activities in
            the field of Engineering and Technology. The conference will provide an excellent
            international forum for sharing knowledge and results in Engineering and Technology.
        </Text>
    </Layout>
);
export default Home;
