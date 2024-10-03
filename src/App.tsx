import Lenis from "lenis";
import { useEffect, useRef } from "react";
import { Suspense, lazy, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./components/Home"));
const Blogs = lazy(() => import("./components/Blogs"));
const Resume = lazy(() => import("./components/Resume"));
const Loading = lazy(() => import("./components/Loading"));

function App() {
  const rafId = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="app">
      <Suspense fallback={<Loading />}>
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
