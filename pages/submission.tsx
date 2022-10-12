import { Button, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import fileDownload from 'js-file-download';
import Layout from '../layout';

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
            <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Review:</span> All
            submitted papers are subject to strict double-blind peer review process by at least two
            international reviewers that are experts in the area of the particular paper
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
        <Button
            marginBlockEnd="9px"
            width="125px"
            paddingInline="5px"
            paddingBlock="18px"
            background="brand.900"
            color="white"
            onClick={() => fileDownload('/paper-template.doc', 'paper-template.doc')}
            _hover={{ background: 'black', color: 'white' }}
        >
            Paper Template
        </Button>
    </Layout>
);
export default Submission;
