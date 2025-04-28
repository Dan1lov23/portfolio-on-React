import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from '../src/page/home page/Home.tsx'
import Technologies from '../src/page/technologies page/Technologies.tsx'
import Contact from '../src/page/contact page/Contact.tsx'
import Projects from "./page/project page/projects.tsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<Home />}/>
                    <Route path="skills" element={<Technologies/>}/>
                    <Route path="contacts" element={<Contact />}/>
                    <Route path="projects" element={<Projects />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
