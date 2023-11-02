import "./auth.css";

const Auth = ({ showSignIn }) => {
  if (!showSignIn) {
    return null;
  }

	const handleSignIn = async () => {
		// handle sign in logic
	};

	const handleSignUp = async () => {
		// handle sign up logic
	};
  

	return (
		<div className="auth-container">
			<h2>Sign In</h2>
			<button className="sign-in" onClick={handleSignIn}>With Google</button>
      <h2>Sign Up</h2>
      <button className="sign-up" onClick={handleSignUp}>With Google</button>
		</div>
	);
};

export default Auth;
