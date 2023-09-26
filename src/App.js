import React from "react";
import { initNear } from '../services/near';
import { initEthereum } from '../services/ethereum';

import Layout from "./pages/Layout";
import Landing from "./pages/landing/Landing";
import UploadPage from "./pages/upload/UploadPage";
import Feed from "./pages/feed/Feed";
import Account from "./pages/account/Account";

import { HashRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    // Notice the basename prop added below
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="upload" element={<UploadPage />} />
          <Route path="feed" element={<Feed />} />
          <Route path="account" element={<Account />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
