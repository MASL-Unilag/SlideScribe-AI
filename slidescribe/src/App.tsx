import Header from "./components/organisms/Header";
import SignUpAuthPage from "./components/pages/Auth/SignUpAuthPage";
// import LoginAuthPage from "./components/pages/Auth/LoginAuthPage";

function App() {
  return (
    <div className="max-h-screen">
      <Header />
      <SignUpAuthPage />
      {/* <LoginAuthPage /> */}
    </div>
  );
}

export default App;
