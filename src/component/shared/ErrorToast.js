import { useEffect } from "react";
import { useToasts } from "react-toast-notifications";

const ErrorToast = ({ message }) => {
  const { addToast } = useToasts();

  useEffect(() => {
    addToast(message, { appearance: "error", autoDismiss: true });
  }, [addToast, message]);

  return null;
};

export default ErrorToast;
