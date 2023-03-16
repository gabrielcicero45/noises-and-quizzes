import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  quizCreationStarted,
} from "./state/actions/quizActions";
import Quiz from "./ui/components/Quiz";

function App() {
  const creationStarted = useSelector((state) => state.quizReducer.quizCreation);
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
