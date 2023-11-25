import AboutPage from "./components/pages/About/AboutPage";
import AuthPage from "./components/pages/Auth/AuthPage";
import HomePage from "./components/pages/Home/HomePage";

function App() {
  return (
    <div className="max-h-screen">
      <HomePage />
      <AuthPage />
      {/* <AboutPage /> */}
    </div>
  );
}

export default App;
