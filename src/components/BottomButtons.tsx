import { useColorMode, IconButton, Flex } from '@chakra-ui/react'
import { SunIcon, MoonIcon, ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'
import ReplyIcon from '@mui/icons-material/Reply'

export const BottomButtons = () => {

    const handleShareClick = async () => {
        try {
            const url = window.location.href;
            if (navigator.share) {
                await navigator.share({
                    title: 'Shared from my website',
                    url: url,
                })
            } else {
                const tempInput = document.createElement('input');
                tempInput.setAttribute('style','position: absolute; left: -1000px; top: -1000px');
                tempInput.value = url;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand('copy');
                document.body.removeChild(tempInput);
                const popup = document.createElement('div')
                popup.innerText = 'Link copied!'
                popup.style.position = 'fixed'
                popup.style.bottom = '2rem'
                popup.style.right = '1rem'
                popup.style.backgroundColor = '#fff'
                popup.style.fontWeight = '900'
                popup.style.color = '#9B76AA'
                popup.style.border = '3px solid #9B76AA'
                popup.style.padding = '0.5rem 1rem'
                popup.style.borderRadius = '1rem'
                document.body.appendChild(popup)
                setTimeout(() => {
                    document.body.removeChild(popup)
                }, 3000)
            }
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
