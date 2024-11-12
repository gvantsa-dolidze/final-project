import { useState } from "react";
import Button from "../elements/Button";
import InputElement from "../elements/InputElement";
import LinkBtn from "../elements/LinkBtn";
import Cookies from 'js-cookie'
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitForm = (e: any) => {
    e.preventDefault();
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
        console.log(json.token)
        Cookies.set('AccessToken', json.token)
        alert('შესვლა წარმატებით მოხდა')
      })
      .catch(err => {
        alert('მომხმარებელი ვერ მოიძებნა')
      })
  };

  const onUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };

  const onPasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  return (
    <form onSubmit={onSubmitForm} className="space-y-5 w-80">
      <InputElement
        text="Username"
        type="text"
        placeholder=""
        id="login_username"
        onChange={onUsernameChange}
      />
      <InputElement
        text="Password"
        type="password"
        placeholder=""
        id="login_pass"
        autocomplete="current-password"
        onChange={onPasswordChange}
      />

      <div className="flex flex-col gap-5">
        <LinkBtn
          label="Forgot Password?"
          variant="link"
          destination="/forgot_password_page"
          className=""
        />
        <Button label="Login" type="submit" />
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
