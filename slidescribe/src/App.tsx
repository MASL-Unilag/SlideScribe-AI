import HomePage from "./components/pages/Home/HomePage";
import Button from "./components/organisms/Buttons";
import Header from "./components/organisms/Header";

function App() {
  return (
    <div className="max-h-screen">
      <Header />
      <HomePage />
      <Button type="primary">click me</Button>
    </div>
  );
}

export default App;
