import {Box, Flex, FlexProps, Heading, Text, Tooltip} from '@chakra-ui/react'
import {useEffect, useState, useRef} from "react";

export const TextComponent = (props: FlexProps) => {
    const [displayedText, setDisplayedText] = useState("");
    const [loading, setLoading] = useState(true);
    const [isInView, setIsInView] = useState(false);
    const text = "A US F-22 fighter jet has shot down a cylindrical object in Canadian airspace on Saturday, the second such incident in two days. The US military also scrambled fighter jets to investigate a radar anomaly in Montana. Canadian Prime Minister Justin Trudeau announced the shootdown in the northern Yukon territory, adding that Canadian forces would recover and analyze the wreckage. The Canadian Defense Minister declined to speculate on the origin of the object but said it posed a risk to civilian air traffic and was shot down using an AIM 9X missile. The Pentagon said that the NORAD detected the object over Alaska on Friday and U.S. fighter jets monitored it as it crossed into Canadian airspace, where Canadian CF-18 and CP-140 aircraft joined the formation. The U.S. President Joe Biden authorized the U.S. military to work with Canada to take down the high-altitude craft."
    const textRef = useRef<HTMLDivElement>(null);
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

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            });
        });
        observer.observe(textRef.current);
        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        let intervalId = null;
        if (loading && isInView) {
            intervalId = setInterval(() => {
                if (displayedText.length === text.length || isMobile) {
                    setDisplayedText(text);
                    setLoading(false);
                    clearInterval(intervalId);
                } else if (displayedText.length < text.length) {
                    try {
                        setDisplayedText(text.slice(0, displayedText.length + 1));
                        textRef.current.scrollTop = textRef.current.scrollHeight;
                    } catch (error) {
                        setDisplayedText(text);
                        clearInterval(intervalId);
                    }
                }
            }, Math.floor(Math.random() * 91) + 20);
        }
        return () => {
            clearInterval(intervalId);
        };
    }, [displayedText, loading, text, isInView]);

    return (
        <Box height="100vh" background="#373737" width="100vw">
            <Flex justifyContent="center">
                <Box minWidth="50%" height={84} maxWidth={900} backgroundImage={isMobile ? "linear-gradient(to right, #76AB9B 0%, #76AB9B 10%, #fff 40%, #fff 100%)" : "linear-gradient(to bottom, #75AA9B 0%, #75AA9B 100%)"} padding={{ xl: "1rem", base: "0.75rem" }} marginTop="1.84rem" borderRadius="0.5rem" display="flex" alignItems="center">
                    <Heading paddingLeft={isMobile && "4.5rem"} width="calc(100vw - 3rem)" maxWidth={900} fontSize={{ xl: "xl", base: "md" }} color="#000" textAlign={isMobile ? "start" : "center"}>
                        <Tooltip label="World News">
                            <p style={{ userSelect: 'none', pointerEvents: 'none', fontWeight: 800, textTransform: 'capitalize' }}>U.S. fighter jet shoots down unidentified cylindrical object over Canada</p>
                        </Tooltip>
                    </Heading>
                </Box>
            </Flex>
            <Flex justifyContent="center" height="100%" overflowY="scroll" backgroundImage={isMobile && "linear-gradient(to bottom, #00000005 0%, #00000025 25%, #00000050 70%, #00000090 100%)"}>
                <Text
                    ref={textRef}
                    fontSize={{ xl: "xl", base: "md" }}
                    lineHeight={{ xl: "3rem", base: "2rem" }}
                    paddingBottom={isMobile && "33vh !important"}
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
                    display="block" width="100%" maxWidth={900} p={isMobile ? "1rem" : "1rem 2rem"} m="1rem" borderRadius="0.5rem" color="rgb(209,213,219)" textAlign="start" overflow="scroll" letterSpacing="1px" fontWeight="400">
                    {displayedText}
                    <Box
                        as="span"
                        css={{
                            color: '#ffffff00',
                            background: '#000000',
                            animation: 'rotation 1s linear infinite',
                            '@keyframes rotation': {
                                from: {
                                    background: '#000000'
                                },
                                to: {
                                    background: '#00000000'
                                },
                            }
                        }}
                    >
                        _
                    </Box>
                </Text>
            </Flex>
    </Box>
)
}

