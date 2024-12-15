import { useState } from "react";
import Button from "../elements/Button";
import InputElement from "../elements/InputElement";
import LinkBtn from "../elements/LinkBtn";

const SignUpForm = () => {
  // State to hold form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); 
  const [successMessage, setSuccessMessage] = useState(""); 

  // Handling form submission
  const signUp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(""); 
    setSuccessMessage(""); 

    // Validate input fields
    if (!name || !email || !password) {
      setIsLoading(false);
      setErrorMessage("Please fill in all the fields.");
      return;
    }

    // Create user data object
    const newUser = {
      email,
      username: email.split("@")[0], 
      password,
      name: {
        firstname: name.split(" ")[0], 
        lastname: name.split(" ")[1] || "",
      },
      address: {
        city: "Unknown", 
        street: "Unknown",
        number: 0,
        zipcode: "00000",
        geolocation: {
          lat: "0",
          long: "0",
        },
      },
      phone: "000-000-0000",  
    };

    // Send POST request to create a new user
    fetch("https://fakestoreapi.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json); 
        setIsLoading(false);
        setSuccessMessage("We've sent a confirmation link to your email. Please check your inbox to confirm and log in");
      })
      .catch((err) => {
        console.error("Error:", err);
        setIsLoading(false);
        setErrorMessage("An error occurred during sign-up. Please try again.");
      });
  };

  return (
    <form className="space-y-5" onSubmit={signUp}>
      {errorMessage && (
        <div className="text-red-500 text-sm">
          <p>{errorMessage}</p>
        </div>
      )}

      <InputElement
        text="Full Name"
        type="text"
        placeholder="Enter your full name"
        id="sign_up_name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <InputElement
        text="Email"
        type="email"
        placeholder="Enter your email"
        id="sign_up_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
      />
      <InputElement
        text="Password"
        type="password"
        placeholder="Create a password"
        id="sign_up_pass"
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
      />

      <p className="pb-6">
        By creating an account you agree with our Terms of Service and Privacy Policy.
      </p>

      <div className="flex flex-col gap-5">
        <Button label={isLoading ? "Creating account..." : "Create account"} type="submit" />
        {successMessage && (
          <div className="text-green-500 text-sm mt-4">
            <p>{successMessage}</p>
          </div>
        )}
        <LinkBtn
          label="Already have an account? Log in"
          variant="link"
          destination="/login_page"
          truncateLength={35}
        />
      </div>
    </form>
  );
};

export default SignUpForm;
