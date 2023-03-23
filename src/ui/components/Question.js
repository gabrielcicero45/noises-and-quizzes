import React from "react";
import { useDispatch } from "react-redux";
import { Card, CardContent } from "../theme/Card";
import ActionButtons from "../theme/ActionButtons";
import Icon from "../theme/Icon";
import edit from "../assets/edit.svg";
import remove from "../assets/trash.svg";
import { questionRemoved } from "../../state/actions/quizActions";
import Button from "../theme/Button";

const Question = ({ id, title, type, actions }) => {
  const dispatch = useDispatch();
  return (
    <Card>
      <span id="question-id">#Question {id}</span>

      <CardContent>
        <p>Question: {title}</p>
        <p>Type: {type}</p>
      </CardContent>
      {actions && (
        <ActionButtons>
          <Button type="action" onClick={() => actions.changeQuestion(true)}>
            <Icon src={edit} /> Edit
          </Button>
          <Button type="danger" onClick={() => dispatch(questionRemoved(id))}>
            <Icon src={remove} /> Remove
          </Button>
        </ActionButtons>
      )}
    </Card>
  );
};

export default Question;
