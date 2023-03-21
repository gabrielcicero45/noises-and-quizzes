import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  questionRemoved,
  questionTitleChanged,
  questionTypeChanged,
} from "../../state/actions/quizActions";
import ActionButtons from "../theme/ActionButtons";
import Button from "../theme/Button";
import StyledQuestion from "../theme/StyledQuestion";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import edit from "../assets/edit.svg";
import remove from "../assets/trash.svg";
import Icon from "../theme/Icon";

const Question = ({ id, title, type }) => {
  const dispatch = useDispatch();
  const [changeQuestionType, setChangeQuestionType] = useState(
    title === "" || type === ""
  );
  const [questionTitle, setQuestionTitle] = useState(title || "");
  const [questionType, setQuestionType] = useState(type || "");

  const onConfirm = (questionId, question) => {
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
    <StyledQuestion>
      {!changeQuestionType && (
        <div>
          <p>Question: {title}</p>
          <p>Type: {type}</p>
        </div>
      )}

      {changeQuestionType && (
        <div>
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
        </div>
      )}
      <ActionButtons>
        {!changeQuestionType && (
          <Button type="action" onClick={() => setChangeQuestionType(true)}>
            <Icon src={edit} /> Edit
          </Button>
        )}
        {!changeQuestionType && (
          <Button type="danger" onClick={() => dispatch(questionRemoved(id))}>
            <Icon src={remove} /> Remove
          </Button>
        )}
      </ActionButtons>
      {changeQuestionType && (
        <Button
          onClick={() => {
            setChangeQuestionType(false);
            onConfirm(id, { title: questionTitle, type: questionType });
          }}
        >
          Confirm
        </Button>
      )}
    </StyledQuestion>
  );
};

export default Question;
