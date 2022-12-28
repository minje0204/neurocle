import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Header from "./components/nav/Header";
import CustomStage from "./components/stage/CustomStage";
import { ToolContextProvider } from "./hooks/useToolContext";

function App() {
  return (
    <div className="App">
      <ToolContextProvider>
        <Header />
        <CustomStage />
      </ToolContextProvider>
    </div>
  );
}

export default App;
