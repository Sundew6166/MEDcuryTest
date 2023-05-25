import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomeComponent from "./Components/HomeComponent"
import AppointmentComponent from "./Components/AppointmentComponent"
import Button from 'react-bootstrap/Button';
import FormComponent from "./Components/FormComponent";

function App() {
  return (
    <div className="container">
      <Router>
        <div>
          <ul>
            <Link style={{ textDecoration: 'none' }} to='/' >
              <Button variant="outline-dark">ปฏิทินการทำงาน</Button>
            </Link>
          </ul>
          <ul>
            <Link style={{ textDecoration: 'none' }} to='/appointment' >
              <Button variant="outline-dark">รายการนัดคนไข้</Button>
            </Link>
          </ul>
          <ul>
            <Link style={{ textDecoration: 'none' }} to='/insert' >
              <Button variant="outline-dark">นัดหมอ</Button>
            </Link>
          </ul>

          <Routes>
            <Route path="/" element={<HomeComponent />} />

            <Route path="/appointment" element={<AppointmentComponent />} />

            <Route path="/insert" element={<FormComponent />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
