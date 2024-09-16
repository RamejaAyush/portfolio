// App.tsx
import { useEffect } from "react";
import useStore from "../store/store";
import { Route, Routes, useLocation } from "react-router-dom";

import About from "./About";
import Blogs from "./Blogs";
import Resume from "./Resume";

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
