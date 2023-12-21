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
  const url ="";
  return (
    <Routes>
      <Route path="http://junjunworks.hippy.jp/task_management_for_me/build/" element={<Home />} />
      <Route path="http://junjunworks.hippy.jp/task_management_for_me/build/coding" element={<Coding />} />
      <Route path="http://junjunworks.hippy.jp/task_management_for_me/build/plans" element={<Plans />} />
      <Route path="http://junjunworks.hippy.jp/task_management_for_me/build/kintone" element={<Kintone />} />
      <Route path="http://junjunworks.hippy.jp/task_management_for_me/build/slack" element={<Slack />} />
      <Route path="http://junjunworks.hippy.jp/task_management_for_me/build/servermanagement" element={<Servermanagement />} />
      <Route path="http://junjunworks.hippy.jp/task_management_for_me/build/tips" element={<Tips />} />
    </Routes>
  );
};

export default Pages;
