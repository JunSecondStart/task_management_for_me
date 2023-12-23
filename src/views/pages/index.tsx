import React from "react";
import { Routes, Route } from "react-router-dom";
import Plans from "../components/unique/Plans/Plans";
import Home from "../components/Home";
import Kintone from "../components/unique/Kintone/Kintone";
import Slack from "../components/unique/Slack/Slack";
import Servermanagement from "../components/unique/Servermanagement/Servermanagement";
import Tips from "../components/unique/Tips/Tips";
import Coding from "../components/unique/Coding/Coding";

const Pages: React.FC = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="/coding" element={<Coding />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/kintone" element={<Kintone />} />
      <Route path="/slack" element={<Slack />} />
      <Route path="/servermanagement" element={<Servermanagement />} />
      <Route path="/tips" element={<Tips />} /> */}
      <Route path="https://junjunworks.hippy.jp/task_management_for_me/build/index.html/" element={<Home />} />
      <Route path="https://junjunworks.hippy.jp/task_management_for_me/build/index.html/coding" element={<Coding />} />
      <Route path="https://junjunworks.hippy.jp/task_management_for_me/build/index.html/plans" element={<Plans />} />
      <Route path="https://junjunworks.hippy.jp/task_management_for_me/build/index.html/kintone" element={<Kintone />} />
      <Route path="https://junjunworks.hippy.jp/task_management_for_me/build/index.html/slack" element={<Slack />} />
      <Route path="https://junjunworks.hippy.jp/task_management_for_me/build/index.html/servermanagement" element={<Servermanagement />} />
      <Route path="https://junjunworks.hippy.jp/task_management_for_me/build/index.html/tips" element={<Tips />} />
    </Routes>
  );
};

export default Pages;
