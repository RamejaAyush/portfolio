import Lenis from "lenis";
import Home from "./components/Home";
import "./styles/components/app.scss";
import Navbar from "./components/Navbar";
import { useEffect, useRef } from "react";
import FloatingBar from "./components/FloatingBar";
import Introduction from "./components/Introduction";

const App = () => {
  const rafId = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const appRef = useRef<HTMLDivElement>(null);

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
    <div className="app" ref={appRef}>
      <Navbar />
      <Home />
      <Introduction />
      <FloatingBar />
    </div>
  );
};

export default App;
