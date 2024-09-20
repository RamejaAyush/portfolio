import useStore from "../store/store";
import { lazy, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

const About = lazy(() => import("./About"));
const Blogs = lazy(() => import("./Blogs"));
const Resume = lazy(() => import("./Resume"));

const App = () => {
  const location = useLocation();
  const { setRoute } = useStore();

  useEffect(() => {
    setRoute(location.pathname);
  }, [location, setRoute]);

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<About />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
};

export default App;
