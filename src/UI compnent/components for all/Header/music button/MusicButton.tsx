import '../header buttons style/headerButtonsStyle.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { useMusic } from '../../../../contexts/music context/MusicContext.tsx';

export default function MusicButton() {
    const { isPlaying, playMusic, pauseMusic } = useMusic();

    const music = () => {
        if (!isPlaying) {
            playMusic();
        } else {
            pauseMusic();
        }
    };

    return (
        <div className="tcbutton">
            <FontAwesomeIcon icon={faMusic} onClick={music} />
        </div>
    );
}