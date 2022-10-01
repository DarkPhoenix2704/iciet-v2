import { HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
    <HStack
        as="nav"
        display={{ base: 'none', lg: 'flex' }}
        alignItems="center"
        bg="brand.900"
        color="white"
        paddingBlock="5px"
        justifyContent="center"
        columnGap="20px"
    >
        <NavLink to="/">
            <Text
                fontSize="1.3rem"
                fontWeight="light"
                padding="5px"
                _hover={{
                    textDecoration: 'underline',
                    textDecorationColor: 'white',
                    textUnderlineOffset: '5px',
                }}
            >
                Home
            </Text>
        </NavLink>
        <NavLink to="/committee">
            <Text
                fontSize="1.3rem"
                padding="5px"
                fontWeight="light"
                _hover={{
                    textDecoration: 'underline',
                    textDecorationColor: 'white',
                    textUnderlineOffset: '5px',
                }}
            >
                Committee
            </Text>
        </NavLink>
        <NavLink to="/cfp">
            <Text
                fontSize="1.3rem"
                padding="5px"
                fontWeight="light"
                _hover={{
                    textDecoration: 'underline',
                    textDecorationColor: 'white',
                    textUnderlineOffset: '5px',
                }}
            >
                Call For Papers
            </Text>
        </NavLink>
        <NavLink to="/publication">
            <Text
                fontSize="1.3rem"
                padding="5px"
                fontWeight="light"
                _hover={{
                    textDecoration: 'underline',
                    textDecorationColor: 'white',
                    textUnderlineOffset: '5px',
                }}
            >
                Publication
            </Text>
        </NavLink>
        <NavLink to="/registration">
            <Text
                fontSize="1.3rem"
                padding="5px"
                fontWeight="light"
                _hover={{
                    textDecoration: 'underline',
                    textDecorationColor: 'white',
                    textUnderlineOffset: '5px',
                }}
            >
                Registration
            </Text>
        </NavLink>
        <NavLink to="/speakers">
            <Text
                fontSize="1.3rem"
                padding="5px"
                fontWeight="light"
                _hover={{
                    textDecoration: 'underline',
                    textDecorationColor: 'white',
                    textUnderlineOffset: '5px',
                }}
            >
                Speakers
            </Text>
        </NavLink>
        <NavLink to="/contact">
            <Text
                fontSize="1.3rem"
                padding="5px"
                fontWeight="light"
                _hover={{
                    textDecoration: 'underline',
                    textDecorationColor: 'white',
                    textUnderlineOffset: '5px',
                }}
            >
                Contact
            </Text>
        </NavLink>
    </HStack>
);
export default NavBar;
