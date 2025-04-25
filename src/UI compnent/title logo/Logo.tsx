import './logo.css';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode} from "@fortawesome/free-solid-svg-icons";

export default function Logo() {
    return (
        <>
            <div className="logoMain">
                <h1 className="text-gradient text-[40px] font-bold capitalize">
                    <FontAwesomeIcon icon={faCode} />
                </h1>
            </div>
        </>
    )
}
