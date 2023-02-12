import {Box, Flex, FlexProps, Heading, Image, Text} from '@chakra-ui/react'
import {SideButtons} from "./SideButtons";

export const VideoComponent = (props: FlexProps) => (
    <Flex justifyContent="center" width="100%" background="#77A59B">
        <Image loading="lazy" height="100vh" shadow="md" objectFit="cover" src="https://picsum.photos/500/800" alt="video" />
    </Flex>
)
