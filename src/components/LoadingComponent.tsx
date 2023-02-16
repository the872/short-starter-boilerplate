import { Flex, FlexProps, Spinner } from '@chakra-ui/react';
import React from 'react';

export const LoadingComponent = (props: FlexProps) => (
    <Flex
        justifyContent="center"
        width="100%"
        height="100vh"
        alignItems="center"
        bg="#373737"
        css={{
            animation: 'pulse 2s infinite ease-in-out',
            '@keyframes pulse': {
                '0%': {
                    backgroundColor: '#373737',
                },
                '50%': {
                    backgroundColor: '#75AA9B50',
                },
                '100%': {
                    backgroundColor: '#373737',
                },
            },
        }}
        {...props}
    >
        <Spinner size="xl" color="#75AA9B" thickness="8px" speed="1s" />
    </Flex>
);
