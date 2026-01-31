import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Services from "./components/Services";
import Team from "./components/Team";
import Results from "./components/Results";
import CaseStudy from "./components/CaseStudy";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-slate-900 overflow-x-hidden selection:bg-blue-200 selection:text-blue-900">
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Services />

        <Team />
        <Results />
        <CaseStudy />
      </main>
      <Footer />
    </div>
  );
};

export default App;
