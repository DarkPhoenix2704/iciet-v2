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
    Image,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Layout from '../layout';

const Registration = () => {
    const router = useRouter();
    return (
        <Layout>
            <Heading fontWeight="600" marginTop="18px" fontSize="26px">
                Registration
            </Heading>
            <Text
                style={{
                    marginTop: '18px',
                }}
            >
                IEEE Kerala Section and Ilahia College of Engineering and Technology is jointly
                organizing an International Conference to bring together Researchers, Academicians
                and Professionals all over the world. The Conference will be hosted physically, at
                Ilahia College of Engineering and Technology, Muvattupuzha, on 13th and 14th July,
                2023.
            </Text>
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
                Details of transaction may be uploaded trough your account in Microsoft CMT
                platform.
            </Text>
            <Image marginBlock="10px" width="350px" src="/bank.jpg" alt="bank" />
            <Button
                marginBlockEnd="9px"
                width="150px"
                paddingInline="5px"
                paddingBlock="18px"
                background="brand.900"
                color="white"
                _hover={{ background: 'black', color: 'white' }}
                onClick={() => {
                    router.push('https://forms.gle/Zqm55F2cPiwK4Ngu5');
                }}
            >
                Registration Link
            </Button>
            <TableContainer marginBlock="18px">
                <Table
                    variant="striped"
                    style={{ border: '1px solid', borderCollapse: 'collapse' }}
                >
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
};
export default Registration;
