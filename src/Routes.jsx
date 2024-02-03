import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const MacBookPro14One = React.lazy(() => import("pages/MacBookPro14One"));
const MacBookPro14Five = React.lazy(() => import("pages/MacBookPro14Five"));
const MacBookPro14Seven = React.lazy(() => import("pages/MacBookPro14Seven"));
const MacBookPro14Three = React.lazy(() => import("pages/MacBookPro14Three"));
const MacBookPro14Four = React.lazy(() => import("pages/MacBookPro14Four"));
const DesktopSix1 = React.lazy(() => import("pages/DesktopSix1"));
const DesktopFive1 = React.lazy(() => import("pages/DesktopFive1"));
const DesktopFour1 = React.lazy(() => import("pages/DesktopFour1"));
const DesktopThree = React.lazy(() => import("pages/DesktopThree"));
const DesktopTwo1 = React.lazy(() => import("pages/DesktopTwo1"));
const MacBookPro14SixOne = React.lazy(() => import("pages/MacBookPro14SixOne"));
const DesktopOne1 = React.lazy(() => import("pages/DesktopOne1"));
const DesktopSix = React.lazy(() => import("pages/DesktopSix"));
const DesktopFive = React.lazy(() => import("pages/DesktopFive"));
const DesktopFour = React.lazy(() => import("pages/DesktopFour"));
const DesktopSeven = React.lazy(() => import("pages/DesktopSeven"));
const DesktopTwo = React.lazy(() => import("pages/DesktopTwo"));
const DesktopOne = React.lazy(() => import("pages/DesktopOne"));
const MacBookPro14Six = React.lazy(() => import("pages/MacBookPro14Six"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<MacBookPro14Six />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/desktopone" element={<DesktopOne />} />
          <Route path="/desktoptwo" element={<DesktopTwo />} />
          <Route path="/desktopseven" element={<DesktopSeven />} />
          <Route path="/desktopfour" element={<DesktopFour />} />
          <Route path="/desktopfive" element={<DesktopFive />} />
          <Route path="/desktopsix" element={<DesktopSix />} />
          <Route path="/desktopone1" element={<DesktopOne1 />} />
          <Route path="/macbookpro14sixone" element={<MacBookPro14SixOne />} />
          <Route path="/desktoptwo1" element={<DesktopTwo1 />} />
          <Route path="/desktopthree" element={<DesktopThree />} />
          <Route path="/desktopfour1" element={<DesktopFour1 />} />
          <Route path="/desktopfive1" element={<DesktopFive1 />} />
          <Route path="/desktopsix1" element={<DesktopSix1 />} />
          <Route path="/macbookpro14four" element={<MacBookPro14Four />} />
          <Route path="/macbookpro14three" element={<MacBookPro14Three />} />
          <Route path="/macbookpro14seven" element={<MacBookPro14Seven />} />
          <Route path="/macbookpro14five" element={<MacBookPro14Five />} />
          <Route path="/macbookpro14one" element={<MacBookPro14One />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
