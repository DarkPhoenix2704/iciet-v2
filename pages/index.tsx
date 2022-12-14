import { Heading, Text, Divider, Button, HStack } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';
import Layout from '../layout';

const Home = () => (
    <Layout>
        <Heading fontWeight="600" marginTop="18px" fontSize="26px">
            IEEE International Conference on Innovation In Engineering and Technology
            <br /> 2023
        </Heading>
        <Divider
            marginBlockStart="9px"
            borderColor="#9a9a9a"
            opacity="1"
            borderBottomWidth="1px"
            width="80%"
        />
        <HStack>
            <Button
                marginBlockStart="9px"
                width="125px"
                paddingBlock="18px"
                background="brand.900"
                color="white"
                _hover={{ background: 'black', color: 'white' }}
            >
                <Link href="/registration">Register Now</Link>
            </Button>
            <a download href="Brochure.pdf">
                <Button
                    marginBlockStart="9px"
                    width="125px"
                    paddingBlock="18px"
                    background="brand.900"
                    color="white"
                    _hover={{ background: 'black', color: 'white' }}
                >
                    Brochure
                </Button>
            </a>
        </HStack>
        <Text fontSize="16px" marginBlock="18px" textAlign="justify" lineHeight="25px">
            ICIET-2023 is the IEEE International Conference organized by Ilahia College of
            Engineering and Technology, Muvattupuzha, Kerala, India. This conference aims to bring
            together the Researchers, Engineers, Academicians as well as Industrial Professionals
            from all over the world to present their research results and development activities in
            the field of Engineering and Technology. The conference will provide an excellent
            international forum for sharing knowledge and results in Engineering and Technology to
            discuss and exchange their knowledge in their areas of interest. The researchers in any
            field of Engineering can get an opportunity to share their ideas and thereby get
            directions for future research. Every innovative concept in any domain of Engineering
            can be promoted by our proposed theme.
        </Text>
        <Heading fontWeight="600" marginTop="18px" fontSize="26px">
            About Us
        </Heading>
        <Text fontSize="16px" marginBlock="18px" textAlign="justify" lineHeight="25px">
            Ilahia College of Engineering and Technology (ICET), Mulavoor P.O., Muvattupuzha is a
            co-educational minority institution approved by AICTE, New Delhi and affiliated to APJ
            Abdul Kalam Kerala Technological University (KTU). The college is established in the
            year 2002. Within 20 years since its inception ICET has made many creditable
            achievements. 16 batches of engineering students have passed out from the college with
            academic brilliance and all-round excellence and occupy positions in various corporates
            and institutions. Some of our alumni have also proved themselves as excellent
            entrepreneurs. As part of its social commitment, the college provides free education and
            Scholarship from various agencies.
        </Text>
    </Layout>
);
export default Home;
