import './technologies.css';

import Header from '../../UI compnent/Header/Header.tsx';
import TechTitle from '../../UI compnent/technologies title/TechTitle.tsx'
import MainStack from '../../UI compnent/technologies main stack/MainStack.tsx';

export default function Technologies() {
    return (
        <>
            <div className="technologiesMain">
                <Header/>
                <TechTitle/>
                <div className="mainStackDiv">
                    <MainStack/>
                </div>
            </div>
        </>
    )
}
