import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Recherche from "./pages/Recherche";
import Carte from "./pages/Carte";

function App() {
    return(
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/recherche" element={<Recherche/>}/>
                <Route path="/carte/:name" element={<Carte/>}/>
            </Routes>
        </HashRouter>
    );
}

export default App;
