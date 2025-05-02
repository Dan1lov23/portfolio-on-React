import './projectMain.css';

import ShowAppButton from "../show code button/ShowAppButton.tsx";
import ShowCodeButton from "../show app button/ShowCodeButton.tsx";

export default function ProjectMain({img, title, appSrc, codeSrc}:{img:string, title:string, appSrc:string, codeSrc:string}) {
    return (
        <>
            <div className="projectMain">
                <div className="projectTitle">
                    <h1>{title}</h1>
                </div>
                <div className="projectsImg">
                    <img src={img}/>
                </div>
                <div className="projectsButtons">
                    <ShowAppButton appSrc={appSrc}/>
                    <ShowCodeButton codeSrc={codeSrc}/>
                </div>
            </div>
        </>
    )
}