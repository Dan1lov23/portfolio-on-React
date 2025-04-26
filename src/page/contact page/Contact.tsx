import './contact.css';

import Header from '../../UI compnent/Header/Header.tsx';
import ConTitle from '../../UI compnent/contact title/ConTitle.tsx';
import ContactsIcon from '../../UI compnent/contacts icons/ContactsIcons.tsx';

export default function Contact() {
    return (
        <>
            <div className="contactMain">
                <Header/>
                <ConTitle/>
                <div className="contactsIcons">
                    <ContactsIcon/>
                </div>
            </div>
        </>
    )
}