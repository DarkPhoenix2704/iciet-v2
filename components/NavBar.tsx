import { HamburgerIcon } from '@chakra-ui/icons';
import { HStack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import Link from 'next/link';

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
                <Link href="/">
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
                </Link>
                <Link href="/committee">
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
                </Link>
                <Link href="/cfp">
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
                </Link>
                <Link href="/publication">
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
                </Link>
                <Link href="/submission">
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
                </Link>
                <Link href="/registration">
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
                </Link>
                <Link href="/speakers">
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
                </Link>
                <Link href="https://www.keralatourism.org/">
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
                </Link>
                <Link href="/contact">
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
                </Link>
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
                <Link href="/">
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
                </Link>
                <Link href="/committee">
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
                </Link>
                <Link href="/cfp">
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
                </Link>
                <Link href="/publication">
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
                </Link>
                <Link href="/submission">
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
                </Link>
                <Link href="/registration">
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
                </Link>
                <Link href="/speakers">
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
                </Link>
                <Link href="https://www.keralatourism.org">
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
                </Link>
                <Link href="/contact">
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
                </Link>
            </HStack>
        </>
    );
};
export default NavBar;
