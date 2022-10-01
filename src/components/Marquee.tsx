import { HStack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

const marqueeVariants = {
    animate: {
        x: ['0vw', '100vw'],
        transition: {
            x: {
                duration: 15,
                ease: 'linear',
                repeat: Infinity,
                repeatType: 'loop',
            },
        },
    },
};

const Marquee = () => (
    <HStack background="accent" paddingBlock="10px">
        <motion.div animate="animate" variants={marqueeVariants}>
            <Text color="white" fontSize="1.3rem">
                {' '}
                Call For Papers{' '}
            </Text>
        </motion.div>
    </HStack>
);
export default Marquee;
