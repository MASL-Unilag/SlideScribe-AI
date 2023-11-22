import Header from "./components/organisms/Header";
import AboutPage from "./components/pages/About/AboutPage";
import SignUpAuthPage from "./components/pages/Auth/SignUpAuthPage";
// import LoginAuthPage from "./components/pages/Auth/LoginAuthPage";

function App() {
  return (
    <div className="max-h-screen">
      <Header />
      <SignUpAuthPage />
      <AboutPage />
      {/* <LoginAuthPage /> */}
    </div>
  );
}

export default App;
