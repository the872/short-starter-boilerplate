import {useColorMode, IconButton, Flex, Icon} from '@chakra-ui/react'
import { SunIcon, MoonIcon, ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'
import ReplyIcon from '@mui/icons-material/Reply'

export const DarkModeSwitch = () => {
  return (
      <Flex justifyContent="column">
        <IconButton
            position="relative"
            bottom="12rem"
            left="calc(100vw - 5rem)"
            p={5}
            borderRadius={25}
            icon={<ThumbUpIcon />}
            aria-label="Like"
        />
        <IconButton
            position="relative"
            bottom="8rem"
            left="calc(100vw - 9rem)"
            p={5}
            borderRadius={25}
            icon={<ThumbDownIcon />}
            aria-label="Dislike"
        />
        <IconButton
            position="relative"
            bottom="4rem"
            left="calc(100vw - 13rem)"
            p={5}
            borderRadius={25}
            transform="scaleX(-1)"
            icon={<ReplyIcon />}
            aria-label="Share"
        />
      </Flex>
  )
}
