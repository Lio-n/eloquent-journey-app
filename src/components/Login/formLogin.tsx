import { createUser } from "@/lib/redux/states/user";
import { PrivatePaths } from "@/routes/path.routes";
import loginApi from "@/services/public/auth.service";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import loadingButton from "./helpers/loadingButton";
import delay from "@/utilities/delay.utility";

const FormLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { email, password } = e.target;

    if (!!email.getAttribute("aria-invalid")) email.removeAttribute("aria-invalid");

    if (!!password.getAttribute("aria-invalid")) password.removeAttribute("aria-invalid");

    const formBtnElem = document.getElementById("form_btn") as HTMLButtonElement;

    if (formBtnElem) {
      loadingButton({ buttonElem: formBtnElem, isLoading: true });

      delay(async () => {
        try {
          const result = await loginApi({ email: email.value, password: password.value });

          if (result) {
            dispatch(createUser(result));

            loadingButton({ buttonElem: formBtnElem, isLoading: false });

            navigate(PrivatePaths.DASHBOARD, { replace: true });
          }
        } catch (err: any) {
          if (err === "Invalid email") email.setAttribute("aria-invalid", "true");

          if (err === "Wrong password") password.setAttribute("aria-invalid", "true");

          loadingButton({ buttonElem: formBtnElem, isLoading: false });
        }
      });
    }
  };

  return (
    <>
      <form action="submit" onSubmit={handleSubmit} style={{ margin: "0" }}>
        <label htmlFor="email">
          Email address
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
            aria-label="Input Email"
            required
            defaultValue={"john.doe@gmail.com"}
          />
        </label>

        <label htmlFor="password">
          Password
          <input type="text" id="password" name="password" aria-label="Input Password" placeholder="Password" required defaultValue={"johnny27"} />
        </label>

        <button id="form_btn" onSubmit={handleSubmit} style={{ margin: "0" }}>
          Login
        </button>
      </form>
    </>
  );
};

export default FormLogin;
