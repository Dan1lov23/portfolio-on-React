import './contact.css';

import Header from '../../UI compnent/components for all/Header/Header.tsx';
import ConTitle from '../../UI compnent/componets for contact/contact title/ConTitle.tsx';
import ContactsIcon from '../../UI compnent/componets for contact/contacts icons/ContactsIcons.tsx';

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