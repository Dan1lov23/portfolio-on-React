import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {MusicProvider} from "./contexts/music context/MusicContext.tsx";

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MusicProvider>
                <App />
        </MusicProvider>
    </StrictMode>,
)
