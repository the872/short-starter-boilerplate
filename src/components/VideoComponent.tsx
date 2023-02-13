import React, { useRef, useEffect } from 'react';
import {Flex, FlexProps} from '@chakra-ui/react'

export const VideoComponent = (props: FlexProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = React.useState(true);

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

    const handleDoubleClick = () => {
        if (videoRef.current) {
            setIsMuted(!isMuted);
            videoRef.current.muted = !isMuted;
        }
    };

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        e.persist();
        let touchEndTime = Date.now();

        setTimeout(() => {
            if (Date.now() - touchEndTime <= 300) {
                handlePlayPause();
            } else {
                handleDoubleClick();
            }
        }, 300);
    };

    return (
        <Flex justifyContent="center" width="100%" height="100vh" maxHeight="-webkit-fill-available" background="#77A59B">
            <video
                loop
                playsInline
                onClick={handlePlayPause}
                onDoubleClick={handleDoubleClick}
                onTouchEnd={handleTouchEnd}
                style={{ cursor: 'pointer', height: '100%', width: '100vw'}}
                ref={videoRef}
                src="https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4"
                height="-webkit-fill-available"
                width="100vw"
                muted={isMuted}
            />
            <div style={{ display: !isMuted && 'none',background: 'white', padding: '1rem', borderRadius: '1rem', position: 'absolute', top: '2rem', right: '2rem', color: '#000000' }}>{isMuted && 'Muted'}</div>
        </Flex>
    );
}
