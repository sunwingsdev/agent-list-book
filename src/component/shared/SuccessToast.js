import { useEffect } from "react";
import { useToasts } from "react-toast-notifications";

const SuccessToast = ({ message }) => {
  const { addToast } = useToasts();

  useEffect(() => {
    addToast(message, { appearance: "success", autoDismiss: true });
  }, [addToast, message]);

  return null;
};

export default SuccessToast;
