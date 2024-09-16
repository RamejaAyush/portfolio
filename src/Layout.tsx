import Lenis from "lenis";
import App from "./routes/App";
import "./styles/components/app.scss";
import Navbar from "./components/Navbar";
import { useEffect, useRef } from "react";
import FloatingBar from "./components/FloatingBar";

const Layout = () => {
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
      <App />
      <FloatingBar />
    </div>
  );
};

export default Layout;
