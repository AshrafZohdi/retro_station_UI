import AnimatedBackground from "./components/animated-background/AnimatedBacground";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AnimatedBackground />
      <Homepage />
      <header className="App-header"></header>
    </div>
  );
}

export default App;
