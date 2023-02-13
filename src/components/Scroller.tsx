import {useState, useEffect, useCallback} from 'react';
import {Box, Flex, Image} from "@chakra-ui/react";
import {VideoComponent} from "./VideoComponent";
import {TextComponent} from "./TextComponent";
import {BottomButtons} from "./BottomButtons";

export const Scroller = ({ title }: { title: string }) => {
    const [data, setData] = useState(Array(10).fill(10));
    const [loading, setLoading] = useState(false);

    const onScroll = useCallback(event => {
        if (loading) return;
        setLoading(true);

        // Load more data
        setTimeout(() => {
            setData([...Array(data.length + 1).fill(data.length + 1)]);
            setLoading(false);
        }, 10);
    }, []);

    useEffect(() => {
        //add eventlistener to window
        window.addEventListener("scroll", onScroll, { passive: true });
        // remove event on unmount to prevent a memory leak with the cleanup
        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, []);

    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            height="100vh"
            maxHeight="-webkit-fill-available"
            bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
            bgClip="text"
            overflowY="scroll"
            scrollSnapType="y mandatory"
            css={{
                '::-webkit-scrollbar': {
                    width: 0,
                    height: 0,
                    display: 'none',
                },
                '::-moz-scrollbar': {
                    width: 0,
                    height: 0,
                    display: 'none',
                },
            }}
        >
            <Flex height="100%" width="100vw" flexDirection="column" alignItems="center">
                {data.map((_, i) => (
                    <>
                        <Box
                            key={i}
                            position="relative"
                            scrollSnapAlign="start"
                            scrollSnapStop="always"
                            height="100%"
                            width="100%"
                        >
                            {i % 2 === 0 ? <VideoComponent /> : <TextComponent />}
                        </Box>
                        <BottomButtons />
                    </>
                ))}
            </Flex>
            <Box
                css={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    height: '3rem',
                    width: '3rem',
                    animation: 'rotation 1s linear',
                    '@keyframes rotation': {
                        from: {
                            top: 'calc(50% - 5rem)',
                            left: 'calc(50% - 5rem)',
                            height: '10rem',
                            width: '10rem',
                        },
                        to: {
                            top: '1rem',
                            left: '1rem',
                            height: '3rem',
                            width: '3rem',
                        },
                    },
                }}
            >
                <Image
                    src="https://iili.io/HEwxs7n.png" />
            </Box>
        </Flex>
    );
};

Scroller.defaultProps = {
    title: 'Generic Page',
}