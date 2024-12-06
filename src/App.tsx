import { useTheme } from "./hooks";
import { Router } from "./router";

function App() {
  useTheme();

  return <Router />;
}

export default App;
