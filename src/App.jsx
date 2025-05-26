import "./App.css";
import BackgroundParticles from "./components/BackgroundParticles";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BackgroundParticles />
      <div style={{ zIndex: 1, position: "relative" }}>
        <Home />
      </div>
    </>
  );
}

export default App;
