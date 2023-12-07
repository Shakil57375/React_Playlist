import "./App.css";
import Clock from "./Components/ClassComponet";
import Football from "./Components/Football";

function App() {
  const variable = "Take the shot!";
  return (
    <div>
      <Clock locale="bn-BD" />
      <Football variable = {variable} />
    </div>
  );
}

export default App;
