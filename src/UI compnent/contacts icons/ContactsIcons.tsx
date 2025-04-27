import './contactsIcons.css';

import {Link} from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGitlab, faSquareGithub, faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons";

export default function ContactsIcons() {
    const contactsArray = [
        {icon: faSquareGithub, href: "https://github.com/Dan1lov23"},
        {icon: faGitlab, href: "https://gitlab.com/DanilovSv"},
        {icon: faLinkedin, href: "/"},
        {icon: faTelegram, href: "https://telegram.com/Danilov"},
    ];

    return (
        <div className="contactsMain">
            <div className="contactsMainContent">
                {contactsArray.map((icon, index) => (
                    <div className="contactsItem" key={index}>
                        <Link to={icon.href}>
                            <FontAwesomeIcon icon={icon.icon} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
