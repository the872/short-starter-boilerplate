import {useColorMode, IconButton, Flex, Icon} from '@chakra-ui/react'
import { SunIcon, MoonIcon, ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'
import ReplyIcon from '@mui/icons-material/Reply'

export const BottomButtons = () => {
  return (
      <Flex position="relative" justifyContent="space-evenly" width="20rem" bottom="4.5rem" marginBottom="-3.5rem">
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
        />
      </Flex>
  )
}
