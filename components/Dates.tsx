import { Box, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';
import React from 'react';

const Dates = () => {
    const [hovered, setHovered] = React.useState(true);
    return (
        <>
            <Box
                background="brand.900"
                zIndex="1"
                display="block"
                transition="all 0.5s"
                transform={hovered ? 'translateX(-400px)' : 'translateX(0px)'}
                textColor="white"
                onMouseLeave={() => setHovered(false)}
                onMouseEnter={() => setHovered(true)}
                borderRadius="8px"
                position="fixed"
                right="-400px"
                bottom="40vh"
                width="fit-content"
                paddingInline="16px"
                paddingBlock="16px"
            >
                <Heading fontWeight="600" fontSize={{ base: '20px', lg: '20px' }}>
                    Important Dates
                </Heading>
                <UnorderedList marginBlock="5px" fontSize={{ base: '16px', lg: '18px' }}>
                    <ListItem>Paper Submission Open: 05 October 2022</ListItem>
                    <ListItem>Paper Submission Due Date: 15 February 2022</ListItem>
                    <ListItem>Paper Acceptance : 31 March 2023</ListItem>
                    <ListItem>Registration Date : 17 April 2023</ListItem>
                    <ListItem>Early Bird Author Registration Closes: 15 May 2023</ListItem>

                </UnorderedList>
            </Box>
            <Box
                display="block"
                bg="white"
                padding="9px"
                borderRadius="full"
                position="fixed"
                right="-20px"
                bottom="50vh"
                cursor="pointer"
                onMouseEnter={() => {
                    setHovered(true);
                }}
                onMouseLeave={() => {
                    setHovered(false);
                }}
            >
                <CalendarIcon width="32px" height="32px" />
            </Box>
        </>
    );
};

export default Dates;
