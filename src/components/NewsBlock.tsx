import { Box, Heading, ListItem, UnorderedList, Text } from '@chakra-ui/react';
import React from 'react';

const NewsBlock = () => (
    <Box color="white" marginBlock="8px" bg="accent" borderRadius="9px" padding="12px">
        <Heading fontWeight="600" fontSize="18px">
            Important News
        </Heading>
        <UnorderedList marginBlockStart="8px">
            <ListItem>
                <Text fontSize="14px">Call for Papers: 05 October 2022</Text>
            </ListItem>
        </UnorderedList>
    </Box>
);

export default NewsBlock;
