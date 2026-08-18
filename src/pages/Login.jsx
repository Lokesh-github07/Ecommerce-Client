function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted");
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <br />

        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;