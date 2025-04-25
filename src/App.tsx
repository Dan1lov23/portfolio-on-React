import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from '../src/page/home/Home.tsx'
import Technologies from '../src/page/technologies page/Technologies.tsx'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<Home />}/>
                    <Route path="technologies" element={<Technologies/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
