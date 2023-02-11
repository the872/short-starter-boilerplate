import {Box, Flex, FlexProps, Heading, Image, Text} from '@chakra-ui/react'
import {DarkModeSwitch} from "./DarkModeSwitch";

export const VideoComponent = (props: FlexProps) => (
    <Box>
        <Image loading="lazy" height="100vh" shadow="md" objectFit="cover" src="https://picsum.photos/500/800" alt="video" />
        <DarkModeSwitch />
        <Box
            pt={2}
            height="6rem"
            position="relative"
            bottom="10.05rem"
            background="#fff"
            m="1rem"
            marginTop="0"
            borderRadius="1rem"
            width="calc(100vw - 7rem)"
        >
            <Heading fontSize="xl">Video Title</Heading>
            <Text>Username</Text>
        </Box>
    </Box>
)
