import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  quizCreationStarted,
} from "./state/quizCreation";
import Quiz from "./ui/components/Quiz";

function App() {
  const creationStarted = useSelector((state) => state.quizCreation.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      {creationStarted ? (
        <Quiz />
      ) : (
        <button onClick={() => dispatch(quizCreationStarted())}>
          Create Quiz !
        </button>
      )}
    </div>
  );
}

export default App;
