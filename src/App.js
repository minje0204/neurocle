import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Header from "./components/nav/Header";
import CustomStage from "./components/stage/CustomStage";
import { HistoryContextProvider } from "./hooks/useHistoryContext";
import { ToolContextProvider } from "./hooks/useToolContext";
import { ShapeContextProvider } from "./hooks/useShapes";
function App() {
  return (
    <div className="App">
      <ToolContextProvider>
        <ShapeContextProvider>
          <HistoryContextProvider>
            <Header />
            <CustomStage />
          </HistoryContextProvider>
        </ShapeContextProvider>
      </ToolContextProvider>
    </div>
  );
}

export default App;
