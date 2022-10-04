import { Heading, Box, Text } from '@chakra-ui/react';
import React from 'react';
import committe from '../data/committe';
import Layout from '../layout';

const Committee = () => (
    <Layout>
        <Heading fontWeight="600" marginBlock="18px" fontSize="26px">
            Conference Committee
        </Heading>
        {committe.map((item) => (
            <>
                <Text fontSize="20px" fontWeight="500" marginBlockStart="5px">
                    {item.role}
                </Text>
                {item.members.map((member) => (
                    <Box
                        marginBlock="4px"
                        border="1px solid grey"
                        borderRadius="5px"
                        paddingInline="8px"
                        paddingBlock="9px"
                    >
                        <Text fontSize="16px">{member.more || ''}</Text>
                        <Text fontSize="16px">{member.name}</Text>
                        <Text fontSize="12px">{member.role}</Text>
                    </Box>
                ))}
            </>
        ))}
    </Layout>
);
export default Committee;
