import { Box, Text, Flex } from '@chakra-ui/react';
import React from 'react';

const Footer = () => (
    <Box bg="#333333">
        <Box paddingBlock="5px">
            <Flex justifyContent="center">
                <Text
                    fontSize={{
                        base: '16px',
                    }}
                    textColor="white"
                    textAlign="center"
                >
                    ICIET 23
                </Text>
            </Flex>
        </Box>
    </Box>
);

export default Footer;
