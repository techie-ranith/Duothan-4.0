"use client"

import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sign } from "crypto";
import Container from "@/components/layouts/Container";
import Navigation from "@/components/layouts/Navigation";
import Footer from "@/components/layouts/Footer";
import SignInPage from "@/app/(pages)/(auth)/signin/page";
import SignUpPage from "@/app/(pages)/(auth)/signup/page";
import Map from  "@/lib/Map"
const page = () => {
  return (
    <main>
   
       <Router>
      <div style={{ display: 'flex', flexDirection: 'column',  }}>
        <Navigation />
        <div style={{ flex: 1 }}>
          <Routes>
          <Route path="@/app/(pages)/(auth)/signin/page" element={<SignInPage />} />
        <Route path="@/app/(pages)/(auth)/signup/page" element={<SignUpPage />} />
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