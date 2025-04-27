import './header.css';

import MusicButton from '../theme change button/MusicButton.tsx';
import TransButton from "../translation button/TransButton.tsx";

import {Link} from "react-router-dom";

export default function Header() {

    const title = "<SD>"

    return (
        <>
            <div className="headerMain">
                <div className="headerTitle">
                    <h1>{title}</h1>
                </div>
                <ul>
                    <li>
                        <Link to="/*">
                            about me
                        </Link>
                    </li>
                    <li>
                        <Link to="/skills">
                            skills
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects">
                            projects
                        </Link>
                    </li>
                    <li>
                        <Link to="/contacts">
                            contacts
                        </Link>
                    </li>
                    <li>
                        <TransButton/>
                    </li>
                    <li>
                        <MusicButton/>
                    </li>
                </ul>
            </div>
        </>
    )
}
