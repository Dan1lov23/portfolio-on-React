import './header.css';

import MusicButton from './music button/MusicButton.tsx';

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
                    <Link to="/*">
                        <li id="headerLi1">
                            about me
                        </li>
                    </Link>
                    <Link to="/skills">
                        <li id="headerLi2">
                            skills
                        </li>
                    </Link>
                    <Link to="/projects">
                        <li id="headerLi3">
                            projects
                        </li>
                    </Link>
                    <Link to="/contacts">
                        <li id="headerLi4">
                            contacts
                        </li>
                    </Link>
                    <li>
                        <MusicButton/>
                    </li>
                </ul>
            </div>
        </>
    )
}
