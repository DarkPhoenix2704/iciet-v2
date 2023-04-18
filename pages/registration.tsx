import React from 'react';
import {
    Heading,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Th,
    Text,
    Thead,
    Button,
    Tr,
} from '@chakra-ui/react';
import Layout from '../layout';

const Registration = () => (
    <Layout>
        <Heading fontWeight="600" marginTop="18px" fontSize="26px">
            Registration
        </Heading>
        <Heading fontWeight="400" marginBlock="18px" fontSize="18px">
            Deposit registration fee in following account.
        </Heading>
        <Text>
            Name of Account: Ilahia College of Engineering and Technology
            <br />
            Account Number: 10090100255115
            <br />
            IFSC: FDRL0001009
            <br />
            Name of Bank and Branch: Federal Bank, Muvattupuzha
            <br />
            Type of Account: Savings Swift Code: FDRLINBBIBD
            <br />
            Details of transaction may be uploaded trough your account in Microsoft CMT platform.
        </Text>
        <Button
            marginBlockEnd="9px"
            width="125px"
            paddingInline="5px"
            paddingBlock="18px"
            background="brand.900"
            color="white"
            _hover={{ background: 'black', color: 'white' }}
            onClick={() => {
                navigator.clipboard.writeText('http://ieee.icet.ac.in/registration.html');
            }}
        >
            Click to Copy Registration Link
        </Button>
        <TableContainer marginBlock="18px">
            <Table variant="striped" style={{ border: '1px solid', borderCollapse: 'collapse' }}>
                <TableCaption>Registration Fees</TableCaption>
                <Thead>
                    <Tr>
                        <Th
                            rowSpan={2}
                            textAlign="center"
                            style={{ border: '1px solid', borderCollapse: 'collapse' }}
                        >
                            Categories
                        </Th>
                        <Th
                            colSpan={2}
                            textAlign="center"
                            style={{ border: '1px solid', borderCollapse: 'collapse' }}
                        >
                            Delegates From India
                        </Th>
                        <Th
                            colSpan={2}
                            textAlign="center"
                            style={{ border: '1px solid', borderCollapse: 'collapse' }}
                        >
                            Foreign Delegates
                        </Th>
                    </Tr>
                    <Tr>
                        <Th
                            textAlign="center"
                            style={{ border: '1px solid', borderCollapse: 'collapse' }}
                        >
                            IEEE Member
                        </Th>
                        <Th
                            textAlign="center"
                            style={{ border: '1px solid', borderCollapse: 'collapse' }}
                        >
                            Non IEEE Member
                        </Th>
                        <Th
                            textAlign="center"
                            style={{ border: '1px solid', borderCollapse: 'collapse' }}
                        >
                            IEEE Member
                        </Th>
                        <Th
                            textAlign="center"
                            style={{ border: '1px solid', borderCollapse: 'collapse' }}
                        >
                            Non IEEE Member
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td
                            textAlign="center"
                            style={{ border: '1px solid', borderCollapse: 'collapse' }}
                        >
                            {' '}
                            UG/PG Students{' '}
                        </Td>
                        <Td
                            textAlign="center"
                            style={{ border: '1px solid', borderCollapse: 'collapse' }}
                        >
                            {' '}
                            INR 5000/-{' '}
                        </Td>
                        <Td
                            textAlign="center"
                            style={{ border: '1px solid', borderCollapse: 'collapse' }}
                        >
                            {' '}
                            INR 6000/-{' '}
                        </Td>
                        <Td
                            textAlign="center"
                            style={{ border: '1px solid', borderCollapse: 'collapse' }}
                        >
                            {' '}
                            USD 200/-{' '}
                        </Td>
                        <Td
                            textAlign="center"
                            style={{ border: '1px solid', borderCollapse: 'collapse' }}
                        >
                            {' '}
                            USD 250/-{' '}
                        </Td>
                    </Tr>
                    <Tr>
                        <Td
                            textAlign="center"
                            style={{ border: '1px solid', borderCollapse: 'collapse' }}
                        >
                            Faculty/ Research Scholar
                        </Td>
                        <Td
                            textAlign="center"
                            style={{ border: '1px solid', borderCollapse: 'collapse' }}
                        >
                            {' '}
                            INR 6000/-{' '}
                        </Td>
                        <Td
                            textAlign="center"
                            style={{ border: '1px solid', borderCollapse: 'collapse' }}
                        >
                            {' '}
                            INR 7000/-{' '}
                        </Td>
                        <Td
                            textAlign="center"
                            style={{ border: '1px solid', borderCollapse: 'collapse' }}
                        >
                            {' '}
                            USD 250/-{' '}
                        </Td>
                        <Td
                            textAlign="center"
                            style={{ border: '1px solid', borderCollapse: 'collapse' }}
                        >
                            {' '}
                            USD 300/-{' '}
                        </Td>
                    </Tr>
                    <Tr>
                        <Td
                            textAlign="center"
                            style={{ border: '1px solid', borderCollapse: 'collapse' }}
                        >
                            Industry/Corporate
                        </Td>
                        <Td
                            textAlign="center"
                            style={{ border: '1px solid', borderCollapse: 'collapse' }}
                        >
                            {' '}
                            INR 7500/-{' '}
                        </Td>
                        <Td
                            textAlign="center"
                            style={{ border: '1px solid', borderCollapse: 'collapse' }}
                        >
                            {' '}
                            INR 8500/-{' '}
                        </Td>
                        <Td
                            textAlign="center"
                            style={{ border: '1px solid', borderCollapse: 'collapse' }}
                        >
                            {' '}
                            USD 300/-{' '}
                        </Td>
                        <Td
                            textAlign="center"
                            style={{ border: '1px solid', borderCollapse: 'collapse' }}
                        >
                            {' '}
                            USD 350/-{' '}
                        </Td>
                    </Tr>
                    <Tr>
                        <Td
                            textAlign="center"
                            style={{ border: '1px solid', borderCollapse: 'collapse' }}
                        >
                            Co-Author/Attendee
                        </Td>
                        <Td
                            textAlign="center"
                            style={{ border: '1px solid', borderCollapse: 'collapse' }}
                        >
                            {' '}
                            INR 2000/-{' '}
                        </Td>
                        <Td
                            textAlign="center"
                            style={{ border: '1px solid', borderCollapse: 'collapse' }}
                        >
                            {' '}
                            INR 3000/-{' '}
                        </Td>
                        <Td
                            textAlign="center"
                            style={{ border: '1px solid', borderCollapse: 'collapse' }}
                        >
                            {' '}
                            USD 100/-{' '}
                        </Td>
                        <Td
                            textAlign="center"
                            style={{ border: '1px solid', borderCollapse: 'collapse' }}
                        >
                            {' '}
                            USD 100/-{' '}
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    </Layout>
);
export default Registration;
