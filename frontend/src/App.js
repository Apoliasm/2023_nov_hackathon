import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { AnimatePresence } from "framer-motion";

import StartPage from "./StartPage";
import ChatBot from "./ChatBot";
import Benefit from "./Benefit";
import Welfare from "./Welfare";
import Jobs from "./Jobs";
import JobDetails from "./JobDetails";
import MyInfo from "./MyInfo";
import ApplyPage from "./ApplyPage";
import CallPage from "./CallPage";


function App() {
  return (
    <div>
      <Router>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/chatbot" element={<ChatBot />} />
            <Route path="/benefit" element={<Benefit />} />
            <Route path="/welfare" element={<Welfare />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/job/:id" element={<JobDetails />} />  // 동적 route
            <Route path="/myinfo" element={<MyInfo />} />
            <Route path="/applypage/:id" element={<ApplyPage />} />
            <Route path="/callpage/:id" element={<CallPage />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;