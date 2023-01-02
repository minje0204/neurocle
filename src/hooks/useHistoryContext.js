import { createContext, useContext, useState } from "react";
import { ShapeContext } from "./useShapes";

const HistoryContext = createContext();

const HistoryContextProvider = ({ children }) => {
  const [history, setHistory] = useState([]);
  const [historyStep, setHistoryStep] = useState(0);
  const { shapes, setShapes } = useContext(ShapeContext);

  const addHistory = (lastModifiedShape) => {
    if (history.length === 40) {
      setHistory([...history.slice(1, history.length), lastModifiedShape]);
      return;
    }
    setHistory([...history, lastModifiedShape]);
    setHistoryStep(historyStep + 1);
  };

  const handleUndo = () => {
    if (historyStep === 0) {
      return;
    }
    const previous = history[historyStep - 1];
    setHistoryStep(historyStep - 1);
    shapes[previous.type].splice(shapes[previous.type].length - 1, 1);
    setShapes({ ...shapes, [previous.type]: [...shapes[previous.type]] });
  };

  const handleRedo = () => {
    if (historyStep === history.length) {
      return;
    }
    const next = history[historyStep];
    setHistoryStep(historyStep + 1);
    setShapes({ ...shapes, [next.type]: [...shapes[next.type], next.data] });
  };

  return (
    <HistoryContext.Provider
      value={{ history, addHistory, handleUndo, handleRedo }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

export { HistoryContext, HistoryContextProvider };
