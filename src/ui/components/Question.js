import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  questionRemoved,
  questionTitleChanged,
  questionTypeChanged,
} from "../../state/actions/quizActions";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

const Question = ({ id, title, type }) => {
  const dispatch = useDispatch();
  const [changeQuestionType, setChangeQuestionType] = useState(
    title === "" || type === ""
  );
  const [questionTitle, setQuestionTitle] = useState(title || "");
  const [questionType, setQuestionType] = useState(type || "");

  const onConfirm = (questionId, question) => {
    console.log(questionId);
    if (type !== questionType) {
      dispatch(
        questionTypeChanged({ questionId: questionId, type: question.type })
      );
    }
    if (title !== questionTitle) {
      dispatch(
        questionTitleChanged({ questionId: questionId, title: question.title })
      );
    }
  };

  return (
    <div>
      {!changeQuestionType && (
        <>
          <p>Question: {title}</p>
          <p>Type: {type}</p>
        </>
      )}

      {changeQuestionType && (
        <>
          <FormInput
            labelText={"Question Title"}
            value={questionTitle}
            onChange={(e) => setQuestionTitle(e.target.value)}
          />
          <FormSelect
            labelText={"Question Type"}
            value={questionType}
            onChange={(e) => setQuestionType(e.target.value)}
          />
        </>
      )}
      {!changeQuestionType && (
        <button className="button" onClick={() => setChangeQuestionType(true)}>
          Edit
        </button>
      )}
      {!changeQuestionType && (
        <button
          className="button button--remove"
          onClick={() => dispatch(questionRemoved(id))}
        >
          Remove
        </button>
      )}
      {changeQuestionType && (
        <button
          className="button"
          onClick={() => {
            setChangeQuestionType(false);
            onConfirm(id, { title: questionTitle, type: questionType });
          }}
        >
          Confirm
        </button>
      )}
    </div>
  );
};

export default Question;
