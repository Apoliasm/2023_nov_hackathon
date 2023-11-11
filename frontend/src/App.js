import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import StartPage from "./StartPage";
import ChatBot from "./ChatBot";
import Benefit from "./Benefit";
import Welfare from "./Welfare";
import Jobs from "./Jobs";
import MyInfo from "./MyInfo";



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/benefit" element={<Benefit />} />
          <Route path="/welfare" element={<Welfare />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/myinfo" element={<MyInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;