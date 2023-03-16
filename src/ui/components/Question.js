import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { questionRemoved } from "../../state/actions/quizActions";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

const Question = ({ id, title, type,onConfirm }) => {
  const dispatch = useDispatch();
  const [changeQuestionType, setChangeQuestionType] = useState(
    title === "" || type === ""
  );
  const [questionTitle, setQuestionTitle] = useState(title||"")
  const [questionType, setQuestionType] = useState(type||"")
  return (
    <div>
      <p>Question: {title}</p>
     <p>Type: {type}</p> 

      {changeQuestionType && (
        <>
          <FormInput
            labelText={"Question Title"}
            value={questionTitle}
            onChange={(e) => setQuestionTitle(e.target.value)
            }
          />
          <FormSelect
            labelText={"Question Type"}
            value={questionType}
            onChange={(e) => setQuestionType(e.target.value)
            }
          />
        </>
      )}
      {!changeQuestionType && (
        <button onClick={() => setChangeQuestionType(true)}>Edit</button>
      )}
      {!changeQuestionType && (
        <button onClick={() => dispatch(questionRemoved(id))}>Remove</button>
      )}
      {changeQuestionType && (
        <button onClick={() => {setChangeQuestionType(false); onConfirm(id,{title: questionTitle , type: questionType})}}>Confirm</button>
      )}
    </div>
  );
};

export default Question;
