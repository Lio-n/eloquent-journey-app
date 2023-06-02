import FormLogin from "@/components/Login/formLogin";

const Login = () => {
  return (
    <article style={{ maxWidth: "30rem", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "1.5rem" }}>Sign in</h1>

      <FormLogin />
    </article>
  );
};

export default Login;
