import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { quizCreationStarted } from "./state/actions/quizActions";
import Quiz from "./ui/components/Quiz";
import QuizesList from "./ui/components/QuizesList";

function App() {
  const creationStarted = useSelector(
    (state) => state.quizReducer.quizCreation
  );
  const quizes = useSelector((state) => state.quizReducer.quizes);  
  const dispatch = useDispatch();

  return (
    <div className="App">
      {creationStarted ? (
        <Quiz />
      ) : (
        <>
          <button className="button" onClick={() => dispatch(quizCreationStarted())}>
            Create Quiz !
          </button>
          <QuizesList quizes={quizes} />
        </>
      )}
    </div>
  );
}

export default App;
