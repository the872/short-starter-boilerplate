import { Flex, FlexProps, Image } from '@chakra-ui/react'

export const VideoComponent = (props: FlexProps) => (
    <Flex justifyContent="center" width="100%" background="#77A59B">
        <Image
            style={{ transition: 'opacity 700ms linear', opacity: '0' }}
            onLoad={e => (e.currentTarget.style.opacity = '1')}
            loading="lazy"
            height="100vh"
            maxHeight="-webkit-fill-available"
            shadow="md"
            objectFit="cover"
            src="https://picsum.photos/500/800"
            alt="video"
        />
    </Flex>
)
