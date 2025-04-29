import { createContext, useContext, useRef, useState, ReactNode } from 'react';
import audioFile from '../../music/paganini-la-campanella.-rondo.mp3'; // Импортируем аудиофайл

interface MusicContextType {
    isPlaying: boolean;
    playMusic: () => void;
    pauseMusic: () => void;
}

const MusicContext = createContext<MusicContextType | null>(null);

interface MusicProviderProps {
    children: ReactNode;
}

export const MusicProvider = ({ children }: MusicProviderProps) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const playMusic = async () => {
        if (audioRef.current) {
            try {
                audioRef.current.currentTime = 0; // Сбрасываем время
                await audioRef.current.play();
                setIsPlaying(true);
            } catch (error) {
                console.error("Ошибка воспроизведения:", error);
            }
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
            <audio ref={audioRef} src={audioFile} />
        </MusicContext.Provider>
    );
};

export const useMusic = () => {
    const context = useContext(MusicContext);

    if (!context) {
        throw new Error('useMusic must be used within a MusicProvider');
    }

    return context;
};