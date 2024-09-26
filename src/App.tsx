import Lenis from "lenis";
import { Suspense, lazy } from "react";
import { useEffect, useRef } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./components/Home"));
const Blogs = lazy(() => import("./components/Blogs"));
const Resume = lazy(() => import("./components/Resume"));

function App() {
  const rafId = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const initializeAnimation = () => {
      lenisRef.current = new Lenis({
        lerp: 0.08,
      });

      const raf = (time: number) => {
        if (lenisRef.current) {
          lenisRef.current.raf(time);
        }
        rafId.current = requestAnimationFrame(raf);
      };

      rafId.current = requestAnimationFrame(raf);
    };

    window.addEventListener("load", initializeAnimation);

    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      window.removeEventListener("load", initializeAnimation);
    };
  }, []);

  return (
    <div className="app">
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
