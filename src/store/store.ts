import { create } from "zustand";

interface IState {
  route: string;
  setRoute: (route: string) => void;
}

const useStore = create<IState>((set) => ({
  route: "about",
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
}));

export default useStore;
