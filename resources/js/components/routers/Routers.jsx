import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Card } from "antd";

import PageHome from "../views/public/PageHome/PageHome";
import PageLogin from "../views/public/PageLogin/PageLogin";
import PageAbout from "../views/public/PageAbout/PageAbout";
import PageDashboard from "../views/private/PageDashboard/PageDashboard";
import PageUsers from "../views/private/PageUsers/PageUsers";
import PageBooks from "../views/private/PageBooks/Pagebooks";
import PageCamp from "../views/private/PageCamp/PageCamp";

import AddCampForm from "../views/private/PageCamp/CampForm/AddCampForm";
import EditCampForm from "../views/private/PageCamp/CampForm/EditCampForm";



export default function Routers() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<PageHome />} />
                <Route path="/about" element={<PageAbout />} />
                <Route path="/dashboard" element={<PageDashboard />} />
                <Route path="/camp" element={<PageCamp/>} />
                <Route path="/camp/edit/:id" element={<EditCampForm />} />
                <Route path="/camp/add" element={<AddCampForm />}/>
                {/* <Route path="/users" element={<PageUsers />} /> 
                <Route path="/login" element={<PageLogin />} />
                <Route path="/books" element={<PageBooks />} /> */}

            </Routes>
        </Router>
        
    );

}

createRoot(document.getElementById("root")).render(<Routers />);