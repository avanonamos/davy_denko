import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Login from "./components/Login";
import ScrollToTop from "./components/ScrollToTop";
import Signup from "./components/Signup";

import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";

import Home from "./pages";
import PhoneSignUp from "./components/PhoneSignUp";

function App() {
  return (
    <Container>
      <ScrollToTop />
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/phonesignup" element={<PhoneSignUp />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
