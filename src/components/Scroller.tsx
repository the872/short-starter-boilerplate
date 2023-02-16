import { useState, useEffect, useCallback } from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import { VideoComponent } from './VideoComponent';
import { TextComponent } from './TextComponent';
import { BottomButtons } from './BottomButtons';

export const Scroller = ({ title }: { title: string }) => {
    const [data, setData] = useState(Array(10).fill(10));
    const [loading, setLoading] = useState(false);
    const [isMobile, setMobile] = useState(false);

    const handleResize = () => {
        const userAgent = navigator.userAgent || navigator.vendor;
        if (/android/i.test(userAgent)
            || /iPad|iPhone|iPod/.test(userAgent)
            || (window.innerWidth <= 800 && window.innerHeight <= 600)) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    },[]);

    const handleScroll = () => {
        if (
            !loading &&
            document.documentElement.scrollHeight -
            document.documentElement.scrollTop ===
            document.documentElement.clientHeight
        ) {
            setLoading(true);
            setData([...Array(data.length + 1).fill(data.length + 10)]);
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
    };

    function debounce(func: Function, delay: number) {
        let timeoutId: any;
        return function (...args: any[]) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
    }

    const debouncedHandleScroll = debounce(handleScroll, 10);

    useEffect(() => {
        // Only add the event listener on the client-side
        document.addEventListener('scroll', debouncedHandleScroll);

        return () => {
            // Clean up the event listener when the component is unmounted
            document.removeEventListener('scroll', debouncedHandleScroll);
        };
    }, []);

    return (
        <>
            <Flex
                justifyContent="center"
                alignItems="center"
                height="100vh"
                maxHeight="-webkit-fill-available"
                bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
                bgClip="text"
                overflowY="scroll"
                scrollSnapType="y mandatory"
                onScroll={debouncedHandleScroll}
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
                            <Box key={i} position="relative" scrollSnapAlign="start" scrollSnapStop="always" height="100%" width="100%">
                                {i % 2 === 0 ? <VideoComponent /> : <TextComponent />}
                            </Box>
                            <BottomButtons />
                        </>
                    ))}
                </Flex>
            </Flex>
            <Flex
                css={{
                    position: 'absolute',
                    top: !isMobile ? '2rem' : '2.75rem',
                    left: '2rem',
                    height: !isMobile ? '5rem' : '3.5rem',
                    width: !isMobile ? '5rem' : '3.5rem',
                }}
            >
                <Image alt="Generic Page" loading="lazy" src="https://iili.io/HGHb612.md.png" />
            </Flex>
        </>
    );
};

Scroller.defaultProps = {
    title: 'Generic Page',
}