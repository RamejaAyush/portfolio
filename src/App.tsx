import "./styles/app.scss";
import Landing from "./components/landing";
import TopNavbar from "./components/topNavbar";
import VideoVisualizer from "./components/videoVisualizer";
import Introduction from "./components/introduction";

function App() {
  return (
    <div className="app">
      <TopNavbar />
      <div className="landing-content">
        <Landing />
        <VideoVisualizer />
      </div>
      <Introduction />
    </div>
  );
}

export default App;
