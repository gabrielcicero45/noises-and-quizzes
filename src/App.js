import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { quizCreationStarted } from "./state/actions/quizActions";
import QuizesList from "./ui/components/QuizesList";
import { getQuizes} from "./state/thunks/quizThunks";
import { useEffect } from "react";
import QuizForm from "./ui/components/QuizForm";

function App() {
  const creationStarted = useSelector(
    (state) => state.quizReducer.quizCreation
  );
  const quizes = useSelector((state) => state.quizReducer.quizes);  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuizes())
  
  }, [])
  
  return (
    <div className="App">
      {creationStarted ? (
        <QuizForm />
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
