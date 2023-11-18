import HomePage from "./components/pages/Home/HomePage";
import Button from "./components/organisms/Buttons";

function App() {
  return (
    <div className="max-h-screen">
      <HomePage />
      <Button type="button">Click me</Button>
    </div>
  );
}

export default App;
