"use client";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sign } from "crypto";
import Container from "@/components/layouts/Container";
import Navigation from "@/components/layouts/Navigation";
import Footer from "@/components/layouts/Footer";
import SignInPage from "@/app/(pages)/(auth)/signin/page";
import SignUpPage from "@/app/(pages)/(auth)/signup/page";
import Map from "@/lib/Map";
import Adminlog from "@/app/(pages)/(auth)/adminlogin/page";
const page = () => {
  return (
    <main>
      <Router>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Navigation />
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/adminlogin" element={<Adminlog />} />
            </Routes>
            <Map />
          </div>
          <Footer />
        </div>
      </Router>
    </main>
  );
};

export default page;
