import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  questionTitleChanged,
  questionTypeChanged,
} from "../../state/quizCreation";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

const Question = ({ id, title, type }) => {
  const dispatch = useDispatch();
  const [changeQuestionType, setChangeQuestionType] = useState(
    title === "" || type === ""
  );
  const quizQuestions = useSelector(
    (state) => state.quizCreation.data.questions
  );
  return (
    <div>
      {title}
      {type}

      {changeQuestionType && (
        <>
          <FormInput
            labelText={"Question Title"}
            value={quizQuestions[id].title}
            onChange={(e) =>
              dispatch(
                questionTitleChanged({
                  questionId: id,
                  title: e.target.value || "",
                })
              )
            }
          />
          <FormSelect
            labelText={"Question Type"}
            value={quizQuestions[id].type}
            onChange={(e) =>
              dispatch(questionTypeChanged({ questionId: id, type: e.target.value }))
            }
          />
        </>
      )}
      {!changeQuestionType && (
        <button onClick={() => setChangeQuestionType(true)}>Edit</button>
      )}
      {changeQuestionType && (
        <button onClick={() => setChangeQuestionType(false)}>Confirm</button>
      )}
    </div>
  );
};

export default Question;
