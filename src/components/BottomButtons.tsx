import { useColorMode, IconButton, Flex } from '@chakra-ui/react'
import { SunIcon, MoonIcon, ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'
import ReplyIcon from '@mui/icons-material/Reply'

export const BottomButtons = () => {

    const handleShareClick = async () => {
        try {
            await navigator.share({
                title: 'Shared from my website',
                url: window.location.href,
            })
        } catch (error) {
            console.error('Error sharing:', error)
        }
    }

    return (
        <Flex position="relative" justifyContent="space-evenly" width="20rem" bottom="5.5rem" marginBottom="-3.5rem">
            <IconButton
                height="3.5rem"
                width="3.5rem"
                borderRadius="5rem"
                icon={<ThumbUpIcon style={{ fill: '#9B76AA' }} />}
                aria-label="Like"
            />
            <IconButton
                height="3.5rem"
                width="3.5rem"
                borderRadius="5rem"
                icon={<ThumbDownIcon style={{ fill: '#9B76AA' }} />}
                aria-label="Dislike"
            />
            <IconButton
                height="3.5rem"
                width="3.5rem"
                borderRadius="5rem"
                transform="scaleX(-1)"
                icon={<ReplyIcon style={{ fill: '#9B76AA' }} />}
                aria-label="Share"
                onClick={handleShareClick}
            />
        </Flex>
    )
}
