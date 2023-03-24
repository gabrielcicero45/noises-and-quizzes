import { useContext } from "react";
import { NotificationsContext } from "../providers/NotificationsProvider";

export const useNotification = () => { 
  const value = useContext(NotificationsContext);

  if (value === undefined) {
    throw new Error("You forgot the NotificationsProvider!");
  }

  const { notification, setNotification } = value;

  const hideNotification = () => {
    setNotification("")
  }

   return {notification, changeNotification: setNotification, hideNotification}
 }  
 