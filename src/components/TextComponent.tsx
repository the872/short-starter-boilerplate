import {Box, Flex, FlexProps, Heading, Text, Tooltip} from '@chakra-ui/react'
import {useEffect, useState, useRef} from "react";

export const TextComponent = (props: FlexProps) => {
    const [displayedText, setDisplayedText] = useState("");
    const [loading, setLoading] = useState(true);
    const [isInView, setIsInView] = useState(false);
    const text = "A US F-22 fighter jet has shot down a cylindrical object in Canadian airspace on Saturday, the second such incident in two days. The US military also scrambled fighter jets to investigate a radar anomaly in Montana. Canadian Prime Minister Justin Trudeau announced the shootdown in the northern Yukon territory, adding that Canadian forces would recover and analyze the wreckage. The Canadian Defense Minister declined to speculate on the origin of the object but said it posed a risk to civilian air traffic and was shot down using an AIM 9X missile. The Pentagon said that the NORAD detected the object over Alaska on Friday and U.S. fighter jets monitored it as it crossed into Canadian airspace, where Canadian CF-18 and CP-140 aircraft joined the formation. The U.S. President Joe Biden authorized the U.S. military to work with Canada to take down the high-altitude craft."
    const textRef = useRef<HTMLDivElement>(null);

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
                setDisplayedText(text.slice(0, displayedText.length + 1));
                textRef.current.scrollTop = textRef.current.scrollHeight;
                if (displayedText.length === text.length) {
                    setLoading(false);
                    clearInterval(intervalId);
                }
            }, 66);
        }
        return () => {
            clearInterval(intervalId);
        };
    }, [displayedText, loading, text, isInView]);

    return (
        <Box height="100vh" background="#9B76AA" width="100vw">
            <Flex justifyContent="center">
                <Box minWidth="50%" height={84} maxWidth={900} background="#ffffff75" padding={{ xl: "1rem", base: "0.75rem" }} marginTop="2rem" borderRadius="1rem" display="flex" alignItems="center">
                    <Heading width="calc(100vw - 10rem)" maxWidth={900} fontSize={{ xl: "xl", base: "md" }} color="#000" textAlign="center">
                        <Tooltip label="World News">
                        <a style={{ textDecoration: 'underline' }} target="_blank" href="https://www.reuters.com/world/us/us-still-gives-no-details-about-alaska-ufo-new-object-seen-over-canada-2023-02-11/">U.S. fighter jet shoots down unidentified cylindrical object over Canada</a>
                    </Tooltip>
                </Heading>
            </Box>
        </Flex>
        <Flex justifyContent="center" height="calc(100vh - 259px)">
            <Text
                ref={textRef}
                fontSize={{ xl: "xl", base: "md" }}
                lineHeight={{ xl: "3rem", base: "2rem" }}
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
                display="block" width="100%" maxWidth={900} p="1rem" m="1rem" borderRadius="1rem" background="#ffffff75" color="#000" textAlign="start" overflow="scroll">
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

