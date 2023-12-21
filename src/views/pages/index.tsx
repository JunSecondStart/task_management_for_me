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
  const url ="http://junjunworks.hippy.jp/task_management_for_me/build";
  return (
    <Routes>
      <Route path={`${url}/`} element={<Home />} />
      <Route path={`${url}/coding`} element={<Coding />} />
      <Route path={`${url}/plans`} element={<Plans />} />
      <Route path={`${url}/kintone`} element={<Kintone />} />
      <Route path={`${url}/slack`} element={<Slack />} />
      <Route path={`${url}/servermanagement`} element={<Servermanagement />} />
      <Route path={`${url}/tips`} element={<Tips />} />
    </Routes>
  );
};

export default Pages;
