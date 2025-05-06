import './project.css';

import Header from '../../UI compnent/components for all/Header/Header.tsx';
import ProjectMain from "../../UI compnent/components for projects/project main/ProjectMain.tsx";
import CategoryTitle from "../../UI compnent/components for projects/project category title/categoryTitle.tsx";
import Stack from "../../UI compnent/components for projects/technologis stack for project/Stack.tsx";

export default function Projects() {

    const defaultSteck = [
        "https://cdn-icons-png.flaticon.com/128/174/174854.png",
        "https://cdn-icons-png.flaticon.com/128/732/732190.png",
        "https://cdn-icons-png.flaticon.com/128/1199/1199124.png",
    ]

    const projectArray = [
        {img: "../src/project imgs/registration.png", title: "Registration form", appSrc: "", codeSrc: ""},
        {img: "../src/project imgs/password generator.png", title: "Password generator", appSrc: "", codeSrc: ""},
        {img: "../src/project imgs/tic tac toe.png", title: "tic tac toe game", appSrc: "", codeSrc: ""},
        {img: "../src/project imgs/weather app.png", title: "weather app", appSrc: "", codeSrc: ""},
        {img: "../src/project imgs/toDoList.png", title: "To-Do List", appSrc: "", codeSrc: ""},
    ]

    return (
        <>
            <Header/>
            <CategoryTitle title="Project on HTML, CSS and JS"/>
            <div className="projects">
                {projectArray.map((item, index) => (
                    <div className="project" key={index}>
                        <ProjectMain img={item.img} title={item.title} appSrc={item.appSrc} codeSrc={item.codeSrc}/>
                        <Stack images={defaultSteck}/>
                    </div>
                ))}
            </div>
            <CategoryTitle title="Peoject on React (JSX, TSX)"/>
        </>
    )
}