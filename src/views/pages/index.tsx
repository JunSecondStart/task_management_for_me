import React from "react";
import { Routes, Route } from "react-router-dom";
import Plans from "../components/Plans";
import Home from "../components/Home";
import Kintone from "../components/Kintone";
import Slack from "../components/Slack";
import Servermanagement from "../components/Servermanagement";
import Tips from "../components/Tips";
import Coding from "../components/Coding";

const Pages: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coding" element={<Coding />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/kintone" element={<Kintone />} />
            <Route path="/slack" element={<Slack />} />
            <Route path="/servermanagement" element={<Servermanagement />} />
            <Route path="/tips" element={<Tips />} />
        </Routes>
    );
}

export default Pages;