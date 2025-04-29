import './technologies.css';

import Header from '../../UI compnent/components for all/Header/Header.tsx';
import TechTitle from '../../UI compnent/components for skills/technologies title/TechTitle.tsx'
import MainStack from '../../UI compnent/components for skills/technologies main stack/MainStack.tsx';

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
