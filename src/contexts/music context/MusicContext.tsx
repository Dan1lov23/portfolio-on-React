import { createContext, useContext, useRef, useState } from 'react';

const MusicContext = createContext(null);

export const MusicProvider = ({ children }) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const playMusic = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    const pauseMusic = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <MusicContext.Provider value={{ isPlaying, playMusic, pauseMusic }}>
            {children}
            <audio ref={audioRef} src="../src/music/paganini-la-campanella.-rondo.mp3" />
        </MusicContext.Provider>
    );
};

export const useMusic = () => {
    return useContext(MusicContext);
};