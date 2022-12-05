import HomePage from "./pages/HomePage";
import background from "./assets/background.jpg";
function App() {
  return (
    <div className="backdrop-blur-sm bg-white/30" style={{ backgroundImage: `url(${background})` }}>
      <HomePage />
    </div>
  );
}

export default App;