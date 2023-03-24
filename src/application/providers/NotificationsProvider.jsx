import { useMemo, useState } from "react";
import { createContext } from "react";

export const NotificationsContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState("");

  const value = useMemo(
    () => ({
      notification,
      setNotification,
    }),
    [notification, setNotification]
  );

  return (
    <NotificationsContext.Provider value={value}>
      {children}
    </NotificationsContext.Provider>
  );
};
