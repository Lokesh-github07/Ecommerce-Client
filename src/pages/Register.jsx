function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration submitted");
  };

  return (
    <div>
      <h1>Create Account</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <br />
          <input
            type="text"
            placeholder="Enter your name"
            required
          />
        </div>

        <br />

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
            placeholder="Create a password"
            required
          />
        </div>

        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;