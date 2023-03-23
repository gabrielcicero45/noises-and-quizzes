import { Alert, AlertText } from "../styles/Alert";
import { useNotification } from "../../application/hooks/useNotification";
import { useSelector } from "react-redux";
import Icon from "../styles/Icon";
import React, { useEffect, useMemo } from "react";
import warning from '../assets/remove_circle.svg'
import info from '../assets/information_circle.svg'

const Notification = () => {
  const { notification,changeNotification, hideNotification } = useNotification();
  const saveStatus = useSelector((state) => state.quizReducer.saveStatus);

  useMemo(
    () => (changeNotification(saveStatus.message)),
    [saveStatus,changeNotification]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      hideNotification()
    }, 3* 1000);
    return () => clearTimeout(timer);
  }, [notification]);

  return (
    notification !== "" && (
      <Alert type={saveStatus.type} ><Icon src={saveStatus.type === "warning" ? warning : info} /><AlertText>{notification}</AlertText></Alert>
    )
  );
};

export default Notification;
