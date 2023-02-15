import React, { useRef, useEffect, useState } from 'react';
import { Flex, FlexProps, IconButton } from '@chakra-ui/react';
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Mute from '@mui/icons-material/VolumeMute';
import Unmute from '@mui/icons-material/VolumeUp';
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

export const VideoComponent = (props: FlexProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMobile, setMobile] = useState(false);

    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor;

        if (/android/i.test(userAgent)
            || /iPad|iPhone|iPod/.test(userAgent)
            || (window.innerWidth <= 800 && window.innerHeight <= 600)) {
            setMobile(true);
        }
    },[]);

    useEffect(() => {
        let observer: IntersectionObserver | null = null;

        if (videoRef.current) {
            // check if video is paused or ended on first load
            setIsPlaying(!videoRef.current.paused && !videoRef.current.ended);

            observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        videoRef.current.src = videoRef.current.dataset.src!;
                        videoRef.current.play().then(() => setIsMuted(false));
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

            // use video element's own `play` and `pause` events to check if it's playing
            const handlePlay = () => {
                setIsPlaying(true);
            };

            const handlePause = () => {
                setIsPlaying(false);
            };

            videoRef.current.addEventListener('play', handlePlay);
            videoRef.current.addEventListener('pause', handlePause);

            return () => {
                if (observer) {
                    observer.disconnect();
                }

                videoRef.current?.removeEventListener('play', handlePlay);
                videoRef.current?.removeEventListener('pause', handlePause);
            };
        }
    }, []);

    const handleMuteUnmute = () => {
        if (videoRef.current) {
            setIsMuted(!isMuted);
            videoRef.current.muted = !isMuted;
        }
    };

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (videoRef.current.paused || videoRef.current.ended) {
                videoRef.current.play();
                handleMuteUnmute();
            } else {
                videoRef.current.pause();
            }
        }
    };

    return (
        <Flex justifyContent="center" width="100%" height="100vh" background="#9B76AA">
            <video
                loop
                muted
                playsInline
                onClick={handlePlayPause}
                style={{
                    height: isMobile && 'calc(100vh - 8rem)',
                    width: 'auto',
                    padding: '1rem',
                    borderRadius: '3rem',
                    objectFit: isMobile ? 'cover' : 'contain',
                }}
                ref={videoRef}
                data-src="https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4"
                height="-webkit-fill-available"
                width="100vw"
            />
            {!isPlaying && (
                <IconButton
                    height="5rem"
                    width="5rem"
                    borderRadius="5rem"
                    onClick={handlePlayPause}
                    boxShadow="inset 0px 2px 5px rgba(0, 0, 0, 0.25)"
                    icon={<PlayCircleIcon style={{ fill: '#9B76AA', fontSize: '5rem' }} />}
                    aria-label="Play"
                    style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                />
            )}
            <IconButton
                height="3rem"
                width="3rem"
                borderRadius="5px"
                onClick={handleMuteUnmute}
                boxShadow="inset 0px 2px 5px rgba(0, 0, 0, 0.25)"
                icon={isMuted ? <Mute style={{ fill: '#9B76AA', fontSize: '2rem' }} /> : <Unmute style={{ fill: '#9B76AA', fontSize: '2rem' }} />}
                aria-label={isMuted ? "Mute" : "Unmute"}
                style={{ position: 'absolute', top: '3rem', right: '2rem' }}
            />
        </Flex>
    );
};