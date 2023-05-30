import { createUser } from "@/lib/redux/states/user";
import { PrivatePaths } from "@/routes/path.routes";
import loginApi from "@/services/public/auth.service";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import loadingButton from "./helpers/loadingButton";

const FormLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { email, password } = e.target;

    email.classList.remove("invalid-border-color");
    password.classList.remove("invalid-border-color");

    const formBtnElem = document.getElementById("form_btn") as HTMLButtonElement;

    if (formBtnElem) {
      loadingButton({ buttonElem: formBtnElem, isLoading: true });

      setTimeout(async () => {
        try {
          const result = await loginApi({ email: email.value, password: password.value });

          if (result) {
            dispatch(createUser(result));

            loadingButton({ buttonElem: formBtnElem, isLoading: false });

            navigate(PrivatePaths.DASHBOARD, { replace: true });
          }
        } catch (err: any) {
          if (err === "Invalid email") email.classList.add("invalid-border-color");

          if (err === "Wrong password") password.classList.add("invalid-border-color");

          loadingButton({ buttonElem: formBtnElem, isLoading: false });
        }
      }, 5000);
    }
  };

  return (
    <>
      <form action="submit" onSubmit={handleSubmit} style={{ margin: "0" }}>
        <label htmlFor="email">
          Email address
          <input type="email" id="email" name="email" placeholder="Email address" aria-label="Input Email" required />
        </label>

        <label htmlFor="password">
          Password
          <input type="text" id="password" name="password" aria-label="Input Password" placeholder="Password" required />
        </label>

        <button id="form_btn" onSubmit={handleSubmit} style={{ margin: "0" }}>
          Login
        </button>
      </form>
    </>
  );
};

export default FormLogin;
