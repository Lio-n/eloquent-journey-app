import FormLogin from "@/components/Login/formLogin";

const Login = () => {
  return (
    <div className="center_items" style={{ height: "100%" }}>
      <article style={{ maxWidth: "30rem", margin: "0 auto" }}>
        <h3 style={{ marginBottom: "1.5rem" }}>Sign in</h3>

        <FormLogin />
      </article>
    </div>
  );
};

export default Login;
