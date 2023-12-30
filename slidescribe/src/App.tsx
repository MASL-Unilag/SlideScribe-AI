import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./route";

function App() {
  return (
    <div className="max-h-screen">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
