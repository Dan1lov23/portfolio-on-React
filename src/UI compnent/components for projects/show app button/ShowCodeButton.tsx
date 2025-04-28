import '../style for project button/projectButtonStyle.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCode} from '@fortawesome/free-solid-svg-icons'

export default function ShowCodeButton({codeSrc}) {
    return (
        <>
            <div className="projectButtonMain">
                <a href={codeSrc}>
                    <button>
                        <FontAwesomeIcon icon={faCode} />
                    </button>
                </a>
            </div>
        </>
    )
}
