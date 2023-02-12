import React, { useRef, useEffect } from 'react';
import {Box, Flex, FlexProps} from '@chakra-ui/react'

export const VideoComponent = (props: FlexProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        let observer: IntersectionObserver | null = null;

        if (videoRef.current) {
            observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        videoRef.current!.play();
                    } else {
                        videoRef.current!.pause();
                    }
                });
            });

            observer.observe(videoRef.current);

            if (videoRef.current!.offsetParent !== null) {
                videoRef.current!.play();
            }
        }

        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, []);


    const handlePlayPause = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    };

    return (
        <Flex justifyContent="center" width="100%" height="100vh" maxHeight="-webkit-fill-available" background="#77A59B">
            <video
                loop
                playsInline
                muted
                onClick={handlePlayPause}
                style={{ cursor: 'pointer', height: '100%', width: '100vw'}}
                ref={videoRef}
                src="https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4"
                height="-webkit-fill-available"
                width="100vw"
            />
        </Flex>
    );
}
