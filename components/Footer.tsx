import { Box, Text, Flex, Icon } from '@chakra-ui/react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import React from 'react';
import Link from 'next/link';

const Footer = () => (
    <Box bg="#333333">
        <Box paddingBlock="5px">
            <Flex
                flexDirection="row"
                paddingBlock={{
                    base: '10px',
                }}
                justifyContent="space-between"
                paddingInline={{
                    base: '10px',
                    md: '50px',
                }}
            >
                <Text
                    fontSize={{
                        base: '16px',
                    }}
                    textColor="white"
                    textAlign="center"
                >
                    ICIET 23
                </Text>
                <Flex flexDirection="row" columnGap="15px">
                    <Link href="https://www.facebook.com/Iceterkm">
                        <Icon
                            cursor="pointer"
                            height="25px"
                            width="25px"
                            as={FaFacebook}
                            color="white"
                        />
                    </Link>
                    <Link href="https://www.instagram.com/ilahiaicet/">
                        <Icon
                            cursor="pointer"
                            height="25px"
                            width="25px"
                            as={FaInstagram}
                            color="white"
                        />
                    </Link>
                </Flex>
            </Flex>
        </Box>
    </Box>
);

export default Footer;
