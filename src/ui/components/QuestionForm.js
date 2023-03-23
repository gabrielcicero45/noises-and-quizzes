import {
  questionTitleChanged,
  questionTypeChanged,
} from "../../state/actions/quizActions";
import { Card, CardContent } from "../styles/Card";
import { useDispatch } from "react-redux";
import Button from "../styles/Button";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import React, { useState } from "react";
import Question from "./Question";

const QuestionForm = ({ id, title, type }) => {
  const [changeQuestionType, setChangeQuestionType] = useState(
    title === "" || type === ""
  );
  const [questionTitle, setQuestionTitle] = useState(title || "");
  const [questionType, setQuestionType] = useState(type || "");
  const dispatch = useDispatch();
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

  return changeQuestionType ? (
    <Card>
      <CardContent style={{ gridArea: "content" }}>
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
      </CardContent>
      <Button
        id="question-confirm"
        onClick={() => {
          setChangeQuestionType(false);
          onConfirm(id, { title: questionTitle, type: questionType });
        }}
      >
        Confirm
      </Button>
    </Card>
  ) : (
    <Question id={id} title={title} type={type} actions={{changeQuestion: setChangeQuestionType}} />
  );
};

export default QuestionForm;
