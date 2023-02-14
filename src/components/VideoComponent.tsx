import React, { useRef, useEffect } from 'react';
import { Flex, FlexProps, IconButton } from '@chakra-ui/react';
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Mute from '@mui/icons-material/VolumeMute';
import Unmute from '@mui/icons-material/VolumeUp';
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

export const VideoComponent = (props: FlexProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = React.useState(true);

    useEffect(() => {
        let observer: IntersectionObserver | null = null;

        if (videoRef.current) {
            observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        videoRef.current.src = videoRef.current.dataset.src!;
                        videoRef.current.play();
                        setIsMuted(false);
                        videoRef.current.muted = false;
                    } else {
                        videoRef.current.pause();
                        setIsMuted(true);
                        videoRef.current.muted = true;
                    }
                });
            });

            observer.observe(videoRef.current);

            if (videoRef.current!.offsetParent !== null) {
                videoRef.current!.src = videoRef.current.dataset.src!;
            }
        }

        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, []);

    const handleMuteUnmute = () => {
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

    return (
        <Flex justifyContent="center" width="100%" height="100vh" background="#77A59B">
            <video
                loop
                muted
                playsInline
                onClick={handlePlayPause}
                style={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                }}
                ref={videoRef}
                data-src="https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4"
                height="-webkit-fill-available"
                width="100vw"
            />
            <IconButton
                height="3rem"
                width="3rem"
                borderRadius="5px"
                onClick={handleMuteUnmute}
                boxShadow="inset 0px 2px 5px rgba(0, 0, 0, 0.25)"
                icon={isMuted ? <Mute style={{ fill: '#9B76AA' }} /> : <Unmute style={{ fill: '#9B76AA' }} />}
                aria-label={isMuted ? "Mute" : "Unmute"}
                _hover={{ bg: '#76AB9B' }}
                style={{ position: 'absolute', top: '1rem', right: '1rem' }}
            />
        </Flex>
    );
};