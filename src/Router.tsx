import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TopNav from './common/TopNav';

const Router = () => {
    return (
        <BrowserRouter>
            <TopNav />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
