import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Toaster } from "@/components/ui/toaster";
import { InfoProvider } from "@/context";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <InfoProvider>
      <div className="bg-custom-dark font-['Roboto']">
        <div className="max-w-[90%] xl:max-w-[80%] lg:max-w-[85%] mx-auto">
          <div className="min-h-[100vh] w-full">
            <Navbar />
            <Header />
            <BackgroundBeams />
          </div>
          <main>
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </main>
        </div>
        <Footer />
      </div>
      <Toaster />
    </InfoProvider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return (
    <>
      <title>
        Rian Mandala Putra - Front-End Engineer | High-Performance Web
        Applications
      </title>
      <meta
        name="description"
        content="Rian Mandala Putra, a dynamic and results-driven Front-End Engineer with over 3 years of experience in building high-performance, scalable web applications. Expert in HTML5, CSS3, JavaScript, TypeScript, React.js, and Next.js. Proven track record in optimizing code for speed and efficiency, enhancing user experiences for millions of users."
      />
      <meta
        name="keywords"
        content="Rian Mandala Putra, Front-End Engineer, Web Developer, HTML5, CSS3, JavaScript, TypeScript, React.js, Next.js, scalable web applications, high-performance web applications, web development, Tokopedia, Mikroskil University, software engineer"
      />
      <meta name="author" content="Rian Mandala Putra" />
      <meta
        property="og:title"
        content="Rian Mandala Putra - Front-End Engineer"
      />
      <meta
        property="og:description"
        content="Dynamic and results-driven Front-End Engineer with over 3 years of experience specializing in building high-performance, scalable web applications."
      />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/dg6ymnwfn/image/upload/v1721283658/portofolio/photo-profile/zeqw3xbhuwnvrkdrd2ve.png"
      />
      <meta property="og:url" content="https://rianmandala.github.io" />
      <meta property="og:type" content="website" />
      <meta
        name="twitter:card"
        content="https://res.cloudinary.com/dg6ymnwfn/image/upload/v1721302660/portofolio/screenshot%20website/uswpsylpa7o8tth6p9mh.png"
      />
      <meta
        name="twitter:title"
        content="Rian Mandala Putra - Front-End Engineer"
      />
      <meta
        name="twitter:description"
        content="Dynamic and results-driven Front-End Engineer with over 3 years of experience specializing in building high-performance, scalable web applications."
      />
      <meta
        name="twitter:image"
        content="https://res.cloudinary.com/dg6ymnwfn/image/upload/v1721283658/portofolio/photo-profile/zeqw3xbhuwnvrkdrd2ve.png"
      />
      <meta name="twitter:site" content="@rianmandala959" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
      />
      <link
        rel="icon"
        type="image/x-icon"
        href="https://res.cloudinary.com/dg6ymnwfn/image/upload/v1721302086/portofolio/photo-profile/bkiw0omug75ownpibgha.png"
      />
    </>
  );
};
