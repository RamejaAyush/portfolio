import { create } from "zustand";

interface IState {
  route: string;
  isVisible: boolean;
  currentRoute: string;
  isAnimatingOut: boolean;
  isContentUpdated: boolean;
  setRoute: (route: string) => void;
  setIsVisible: (visible: boolean) => void;
  setCurrentRoute: (route: string) => void;
  setIsAnimatingOut: (isAnimating: boolean) => void;
  setIsContentUpdated: (isUpdated: boolean) => void;
}

const useStore = create<IState>((set) => ({
  route: "about",
  isVisible: false,
  currentRoute: "about",
  isAnimatingOut: false,
  isContentUpdated: true,

  setRoute: (route: string) => {
    let routeName;

    switch (route) {
      case "/":
        routeName = "Home";
        break;
      case "/blogs":
        routeName = "Blogs";
        break;
      case "/resume":
        routeName = "Resume";
        break;
      default:
        console.error(`Unhandled route: ${route}`);
        return;
    }

    set({ route: routeName });
  },

  setIsAnimatingOut: (isAnimating: boolean) =>
    set({ isAnimatingOut: isAnimating }),
  setIsContentUpdated: (isUpdated: boolean) =>
    set({ isContentUpdated: isUpdated }),
  setIsVisible: (visible: boolean) => set({ isVisible: visible }),
  setCurrentRoute: (route: string) => set({ currentRoute: route }),
}));

export default useStore;
