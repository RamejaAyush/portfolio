import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./components/Home"));
const Blogs = lazy(() => import("./components/Blogs"));
const Resume = lazy(() => import("./components/Resume"));

function App() {
  return (
    <div className="app w-full h-[100vh] bg-black text-white">
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="*" element={<Navigate replace to={"/"} />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
