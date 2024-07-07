import "./styles/app.scss";
import { lazy, Suspense } from "react";
import Loading from "./components/loading";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

const Home = lazy(() => import("./components/home"));
const Blogs = lazy(() => import("./components/blogs"));
const Resume = lazy(() => import("./components/resume"));
const Projects = lazy(() => import("./components/project"));

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <div className="notification">
        <h1>New design coming soon...</h1>
      </div>
      <Routes location={location} key={location.pathname}>
        <Route path="/" Component={Home} />
        <Route path="/blogs" Component={Blogs} />
        <Route path="/resume" Component={Resume} />
        <Route path="/projects" Component={Projects} />
        <Route path="*" Component={Home} />
      </Routes>
    </Suspense>
  );
}

export default App;
