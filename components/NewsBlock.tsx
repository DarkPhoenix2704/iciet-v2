import { Box, Heading, ListItem, UnorderedList, Text } from '@chakra-ui/react';
import React from 'react';

const NewsBlock = () => (
    <Box color="white" marginBlock="8px" bg="accent" borderRadius="9px" padding="12px">
        <Heading fontWeight="600" fontSize="18px">
            Important News
        </Heading>
        <UnorderedList marginBlockStart="8px">
            <ListItem>
                <Text fontSize="14px">
                    {' '}
                    Call For Papers : 05 Oct - <s>28 Nov 2022</s> 21 December 2022
                </Text>
            </ListItem>
            <ListItem>
                <Text fontSize="14px">
                    Paper Acceptance : <s>18 December 2022</s>
                    07 January 2023
                </Text>
            </ListItem>
            <ListItem>
                <Text fontSize="14px">Camera Ready Copy: 15 February 2023</Text>
            </ListItem>
            <ListItem>
                <Text fontSize="14px">Registration Date : 15 March 2023</Text>
            </ListItem>
        </UnorderedList>
    </Box>
);

export default NewsBlock;
