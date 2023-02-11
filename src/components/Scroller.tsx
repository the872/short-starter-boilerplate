import { Flex, Box, Image, Heading, Text } from '@chakra-ui/react'
import {VideoComponent} from "./VideoComponent";

const styles = {
    '::-webkit-scrollbar': {
        display: 'none',
    },
    '::-moz-scrollbar': {
        display: 'none',
    },
    scrollbar: {
        display: 'none',
    },
};

export const Scroller = ({ title }: { title: string }) => (
    <Flex
        justifyContent="center"
        alignItems="center"
        height="100vh"
        bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
        bgClip="text"
        overflowY="scroll"
        scrollSnapType="y mandatory"
    >
        <Flex height="100%" width="100vw" flexDirection="column" alignItems="center">
            {Array(10).fill(10).map((_, i) => (
                <Box
                    key={i}
                    position="relative"
                    scrollSnapAlign="start"
                    height="100vh"
                >
                   <VideoComponent />
                </Box>
            ))}
        </Flex>
    </Flex>
)

Scroller.defaultProps = {
    title: 'Generic Page',
}
