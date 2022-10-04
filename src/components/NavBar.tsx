import { HamburgerIcon } from '@chakra-ui/icons';
import { HStack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <HStack
                display={{ base: 'flex', xl: 'none' }}
                justifyContent="space-between"
                backgroundColor="brand.900"
                paddingInline="18px"
                paddingBlock="9px"
            >
                <Text color="white" fontSize="18px" fontWeight="500">
                    ICIET-23
                </Text>
                <HamburgerIcon
                    color="white"
                    width="35px"
                    transition="all 0.3s ease-in-out"
                    transform={open ? 'rotate(90deg)' : 'rotate(0deg)'}
                    height="35px"
                    onClick={() => setOpen((oen) => !oen)}
                />
            </HStack>
            <VStack paddingInline="8px" display={open ? 'flex' : 'none'}>
                <NavLink to="/">
                    <Text
                        fontSize="18px"
                        minWidth="100vw"
                        fontWeight="light"
                        paddingBlock="4px"
                        paddingInline="10px"
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
                        fontSize="18px"
                        minWidth="100vw"
                        fontWeight="light"
                        paddingBlock="4px"
                        paddingInline="10px"
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
                        fontSize="18px"
                        minWidth="100vw"
                        fontWeight="light"
                        paddingBlock="4px"
                        paddingInline="10px"
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
                        fontSize="18px"
                        minWidth="100vw"
                        fontWeight="light"
                        paddingBlock="4px"
                        paddingInline="10px"
                        _hover={{
                            textDecoration: 'underline',
                            textDecorationColor: 'white',
                            textUnderlineOffset: '5px',
                        }}
                    >
                        Publication
                    </Text>
                </NavLink>
                <NavLink to="/submission">
                    <Text
                        fontSize="18px"
                        minWidth="100vw"
                        fontWeight="light"
                        paddingBlock="4px"
                        paddingInline="10px"
                        _hover={{
                            textDecoration: 'underline',
                            textDecorationColor: 'white',
                            textUnderlineOffset: '5px',
                        }}
                    >
                        Submission
                    </Text>
                </NavLink>
                <NavLink to="/registration">
                    <Text
                        fontSize="18px"
                        minWidth="100vw"
                        fontWeight="light"
                        paddingBlock="4px"
                        paddingInline="10px"
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
                        fontSize="18px"
                        minWidth="100vw"
                        fontWeight="light"
                        paddingBlock="4px"
                        paddingInline="10px"
                        _hover={{
                            textDecoration: 'underline',
                            textDecorationColor: 'white',
                            textUnderlineOffset: '5px',
                        }}
                    >
                        Speakers
                    </Text>
                </NavLink>
                <NavLink to={{pathname: "https://www.keralatourism.org/"}} target="_blank">
                    <Text
                        fontSize="18px"
                        minWidth="100vw"
                        fontWeight="light"
                        paddingBlock="4px"
                        paddingInline="10px"
                        _hover={{
                            textDecoration: 'underline',
                            textDecorationColor: 'white',
                            textUnderlineOffset: '5px',
                        }}
                    >
                        Tourism
                    </Text>
                </NavLink>
                <NavLink to="/contact">
                    <Text
                        fontSize="18px"
                        minWidth="100vw"
                        fontWeight="light"
                        paddingBlock="4px"
                        paddingInline="10px"
                        _hover={{
                            textDecoration: 'underline',
                            textDecorationColor: 'white',
                            textUnderlineOffset: '5px',
                        }}
                    >
                        Contact
                    </Text>
                </NavLink>
            </VStack>

            <HStack
                as="nav"
                display={{ base: 'none', xl: 'flex' }}
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
                <NavLink to="/submission">
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
                        Submission
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
                <NavLink to={{pathname: "https://www.keralatourism.org/"}} target="_blank">
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
                        Tourism
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
        </>
    );
};
export default NavBar;
