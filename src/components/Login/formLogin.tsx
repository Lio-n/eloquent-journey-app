const FormLogin = () => {
  return (
    <>
      <form action="submit">
        <input type="text" aria-label="Email" placeholder="email" />
        <input type="text" aria-label="Password" placeholder="password" />

        <button>Send</button>
      </form>
    </>
  );
};

export default FormLogin;
