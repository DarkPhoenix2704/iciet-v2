import { HStack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const Marquee = () => {
    const [offsetWidth, setOffsetWidth] = useState(0);
    const [windowWidth, setWindowWidth] = useState(-2000);
    const marqueeVariants = {
        animate: {
            x: [windowWidth, offsetWidth],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 20,
                    ease: 'linear',
                },
            },
        },
    };
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        setWindowWidth(window.innerWidth);
        if (ref.current) {
            setOffsetWidth(-ref.current.offsetWidth);
        }
    }, []);

    return (
        <HStack
            width="100%"
            overflowX="hidden"
            height="51px"
            zIndex="2"
            background="brand.900"
            style={{
                marginTop: '0px',
            }}
        >
            <motion.div
                style={{
                    whiteSpace: 'nowrap',
                    overflowX: 'hidden',
                }}
                variants={marqueeVariants}
                animate="animate"
            >
                <Text fontSize="16px" textColor="white" ref={ref}>
                    CFP Date Extended
                </Text>
            </motion.div>
        </HStack>
    );
};

export default Marquee;
