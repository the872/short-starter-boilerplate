import {Image, Flex, Link} from '@chakra-ui/react';
import {Span} from "next/dist/trace";

export const Landing = () => (
    <Link
        href="/feed"
        onClick={(e) => {
            const target = e.target as HTMLDivElement;
            target.style.animation = "fadeOut 1s ease-in-out";
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
                height="20rem"
                width="20rem"
                margin="5rem 0"
                alt="Generic Page"
                src="https://iili.io/HGHb612.md.png"
            />
            <Flex
                style={{
                    backgroundColor: 'white',
                    fontWeight: 800,
                    borderRadius: '5px',
                    padding: '0.5rem 1rem',
                    textDecoration: 'none',
                    color: '#9B76AA',
                    fontSize: '2rem',
                }}
            >
                FREE ACCESS
            </Flex>
        </Flex>
    </Link>
);
