import { Flex, Heading, Text, Image } from '@chakra-ui/react';
import Layout from '../layout';

const AboutICET = () => (
    <Layout>
        <Heading fontWeight="600" marginBlock="18px" fontSize="26px">
            About ICET
        </Heading>
        <Flex
            width="100%"
            flexDirection={{
                base: 'column',
                md: 'row',
            }}
        >
            <Image src="/icet.jpg" width="100%" alt="ICET" height="100%" />
            <Text
                fontSize="16px"
                marginBlock="18px"
                textAlign="justify"
                lineHeight="25px"
                paddingInline={{
                    base: '0px',
                    md: '18px',
                }}
            >
                Ilahia College of Engineering and Technology (ICET), Mulavoor P.O., Muvattupuzha is
                a co-educational minority institution approved by AICTE, New Delhi and affiliated to
                APJ Abdul Kalam Kerala Technological University (KTU). The college is established in
                the year 2002. Within 20 years since its inception ICET has made many creditable
                achievements. 16 batches of engineering students have passed out from the college
                with academic brilliance and all-round excellence and occupy positions in various
                corporates and institutions. Some of our alumni have also proved themselves as
                excellent entrepreneurs. As part of its social commitment, the college provides free
                education and Scholarship from various agencies.
            </Text>
        </Flex>
    </Layout>
);
export default AboutICET;
