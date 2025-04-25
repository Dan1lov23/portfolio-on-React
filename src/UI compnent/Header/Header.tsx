import './header.css';

import TCButton from '../theme change button/TCButton.tsx'

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
                        <Link to="*">
                            about me
                        </Link>
                    </li>
                    <li>
                        <Link to="/technologies">
                            technologies
                        </Link>
                    </li>
                    <li>
                        contacts
                    </li>
                    <li>
                        <TCButton/>
                    </li>
                </ul>
            </div>
        </>
    )
}
