import React, { useRef, useEffect } from 'react';
import { Flex, FlexProps } from '@chakra-ui/react'

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
        <Flex justifyContent="center" width="100%" height="100vh" background="#77A59B">
            <video
                loop
                muted
                onClick={handlePlayPause}
                style={{ cursor: 'pointer' }}
                ref={videoRef}
                height="100%"
            >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4" type="video/mp4" />
                <source src="https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.webm" type="video/webm" />
                <source src="https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.ogv" type="video/ogg" />
            </video>
        </Flex>
    );
}
