import { Button, Heading, Link, Text } from '@chakra-ui/react';
import React from 'react';
import Layout from '../layout';
import template from '../../assets/paper-template.docx';

const Submission = () => (
    <Layout>
        <Heading fontWeight="600" marginBlock="18px" fontSize="26px">
            Paper Submission
        </Heading>
        <Text fontSize="16px" marginBlock="18px" lineHeight="30px" textAlign="left">
            <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Contribution:</span>{' '}
            Paper should represent the novel research contribution. The paper should be written in
            English.
            <br />
            <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Theme:</span> The
            paper should fall under anyone of the most relevant themes mentioned in the conference
            Call for Papers.
            <br />
            <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Length:</span> Papers
            must be no longer than 15 pages, including all text, figures, and references. Please
            download the paper template and follow the format carefully.
            <br />
            <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Format:</span> The
            abstract should be submitted in the format of MS Word (.doc or .docx) document /PDF.
            <br />
            <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Review:</span> Reviews
            will be handled directly by the technical program committee.
            <br />
            <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Note:</span> Documents
            that do not conform to the guidelines will not be preceded to the next stage and also
            the documents received after the given deadline, due to any reason will not be accepted
            unless the deadline is extended.
            <br />
            <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
                Submission Template:
            </span>{' '}
            The following link point to an example paper containing detailed formatting guidelines
            for Publication. The publisher also constitutes templates for paper submissions.
        </Text>
        <Link href={template} target="_blank download">
            <Button
                marginBlockEnd="9px"
                width="125px"
                paddingBlock="18px"
                background="brand.900"
                color="white"
                _hover={{ background: 'black', color: 'white' }}
            >
                Paper Template
            </Button>
        </Link>
    </Layout>
);
export default Submission;
