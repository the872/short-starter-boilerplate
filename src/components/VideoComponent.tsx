import {Box, Flex, FlexProps, Heading, Image, Text} from '@chakra-ui/react'

export const VideoComponent = (props: FlexProps) => (
    <Box>
        <Image height="95vh" shadow="md" borderRadius="0.5rem" objectFit="cover" src="https://picsum.photos/500/800" alt="video" />
        <Box
            pt={2}
            height="10vh"
            position="absolute"
            bottom="1rem"
        >
            <Heading fontSize="xl">Video Title</Heading>
            <Text>Username</Text>
        </Box>
    </Box>
)
