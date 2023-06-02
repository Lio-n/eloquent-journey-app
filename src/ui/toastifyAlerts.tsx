import { ToastContainer, toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContainerAlert = () => {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  );
};

const defaultOptions: ToastOptions = {
  position: "bottom-right",
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

const AlertSuccess = (message: string | any = "🦄 Wow so easy!") => toast.success(message, defaultOptions);
const AlertError = (message: string | any = "🦄 Oops, some thing goes wrong!") => toast.error(message, defaultOptions);
const AlertWarn = (message: string | any = "🦄 Wow so easy!") => toast.warn(message, defaultOptions);
const AlertInfo = (message: string | any = "🦄 Wow so easy!") => toast.info(message, defaultOptions);

export { ContainerAlert, AlertSuccess, AlertError, AlertWarn, AlertInfo };
