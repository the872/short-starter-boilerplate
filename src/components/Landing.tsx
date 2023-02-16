import {Button, Image, Flex, Link} from '@chakra-ui/react';
import {Span} from "next/dist/trace";

export const Landing = () => (
    <Link
        href="/feed"
        onClick={(e) => {
            const target = e.target as HTMLDivElement;
            target.style.animation = "fadeOut 1s ease-in-out";
            document.getElementById("logo-landing").style.animation = "fadeOut 1s ease-in-out";
            document.getElementById("button-landing").style.animation = "fadeOut 1s ease-in-out";
        }}
        css={`
          @keyframes fadeOut {
            0% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          cursor: pointer;
          text-decoration: none;
          background: #373737;
          &:hover {
            text-decoration: none;
          }
        `}
    >
        <Flex
            justifyContent="space-evenly"
            alignItems="center"
            height="100vh"
            width="100vw"
            maxHeight="-webkit-fill-available"
            bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
            bgClip="text"
            overflowY="scroll"
            scrollSnapType="y mandatory"
            cursor="pointer"
            flexDirection="column"
        >
            <Image
                id="logo-landing"
                height="20rem"
                width="20rem"
                margin="5rem 0"
                alt="Generic Page"
                style={{ pointerEvents: 'none' }}
                src="https://iili.io/HGHb612.md.png"
                css={`
                @keyframes fadeOut {
                    0% {
                      opacity: 1;
                    }
                    100% {
                      opacity: 0;
                    }
                }`}
            />
            <Button
                id="button-landing"
                style={{
                    fontWeight: 800,
                    borderRadius: '0.5rem',
                    padding: '2rem 2.875rem',
                    textDecoration: 'none',
                    color: '#75AA9B',
                    fontSize: '2rem',
                    border: '0.5rem solid #75AA9B'
                }}
                css={`
                @keyframes fadeOut {
                    0% {
                      opacity: 1;
                    }
                    100% {
                      opacity: 0;
                    }
                }`}
                bg="#373737"
                _hover={{ bg: '#fff' }}
            >
                <span>FREE ACCESS</span>
            </Button>
        </Flex>
    </Link>
);
