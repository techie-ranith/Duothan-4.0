"use client"

import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sign } from "crypto";
import JobCard from "@/components/layouts/JobCard";
import Container from "@/components/layouts/Container";
import Navigation from "@/components/layouts/Navigation";
import LoginPage from "@/app/(pages)/(auth)/signin/page";

const page = () => {
  return (
    <main>
       <Router>
      <Navigation />
      <Routes>
        <Route path="@/app/(pages)/(auth)/signin/page" element={<LoginPage />} />
        {/* Define other routes here */}
      </Routes>
    </Router>
    </main>
  );
};

export default page;
