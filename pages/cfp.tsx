import { Heading, ListItem, UnorderedList, Text } from '@chakra-ui/react';
import React from 'react';
import Tracks from '../data/tracks';
import Layout from '../layout';

const CallForPaper = () => (
    <Layout>
        <Heading fontWeight="600" marginBlock="18px" fontSize="26px">
            ICIET 23 will have the following Tracks:
        </Heading>
        {Tracks.map((track) => (
            <>
                <Heading key={track.id} fontWeight="600" marginBlock="18px" fontSize="20px">
                    {track.title}
                </Heading>
                <UnorderedList>
                    {track.subs.map((sub) => (
                        <ListItem key={sub}>
                            <Text fontSize="15px">{sub}</Text>
                        </ListItem>
                    ))}
                </UnorderedList>
            </>
        ))}
    </Layout>
);
export default CallForPaper;
