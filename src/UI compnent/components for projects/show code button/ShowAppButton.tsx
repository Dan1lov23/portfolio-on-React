import '../style for project button/projectButtonStyle.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye} from '@fortawesome/free-solid-svg-icons'

export default function ShowAppButton({appSrc}) {
    return (
        <>
            <div className="projectButtonMain">
                <a href={appSrc}>
                    <button>
                        <FontAwesomeIcon icon={faEye} />
                    </button>
                </a>
            </div>
        </>
    )
}
