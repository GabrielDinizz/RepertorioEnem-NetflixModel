import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Criadores from './pages/Criadores';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="/pesquisa" element={<Criadores />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
