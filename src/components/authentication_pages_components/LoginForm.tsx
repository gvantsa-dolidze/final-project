import { useState } from "react";
import Button from "../elements/Button";
import InputElement from "../elements/InputElement";
import LinkBtn from "../elements/LinkBtn";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // Error message state
  const [successMessage, setSuccessMessage] = useState(""); // Success message state
  const navigate = useNavigate();

  const onSubmitForm = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(""); // Reset error message before submission
    setSuccessMessage(""); // Reset success message before submission

    if (!username || !password) {
      setIsLoading(false);
      setErrorMessage("Please fill in all the fields.");
      return;
    }

    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        Accept: "Application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.token) {
          Cookies.set("AccessToken", json.token);
          setSuccessMessage("Login successful! Redirecting...");
          setIsLoading(false);
          navigate("/profile_page");
        } else {
          setErrorMessage("Invalid username or password. Please try again.");
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        setErrorMessage("An error occurred while logging in. Please try again.");
        setIsLoading(false);
      });
  };

  const onUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };

  const onPasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  return (
    <form onSubmit={onSubmitForm} className="space-y-5 w-80">
      {/* Show error message */}
      {errorMessage && (
        <div className="text-red-500 text-sm">
          <p>{errorMessage}</p>
        </div>
      )}

      {/* Show success message */}
      {successMessage && (
        <div className="text-green-500 text-sm">
          <p>{successMessage}</p>
        </div>
      )}

      <InputElement
        text="Username"
        type="text"
        placeholder="Enter your username"
        id="login_username"
        value={username}
        onChange={onUsernameChange}
      />
      <InputElement
        text="Password"
        type="password"
        placeholder="Enter your password"
        id="login_pass"
        autocomplete="current-password"
        value={password}
        onChange={onPasswordChange}
      />

      <div className="flex flex-col gap-5">
        <LinkBtn
          label="Forgot Password?"
          variant="link"
          destination="/forgot_password_page"
        />
        <Button label={isLoading ? "Loading..." : "Sign In"} type="submit" />
        <LinkBtn
          label="Don't have an account? Sign up"
          variant="link"
          destination="/sign_up_page"
        />
      </div>
    </form>
  );
};

export default LoginForm;
