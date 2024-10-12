import Button from "../elements/Button";
import InputElement from "../elements/InputElement";
const SignUpForm = () => {
  return (
    <form action="" className="space-y-5">
              <InputElement text="name" type="text" placeholder="" />
              <InputElement text="Email" type="email" placeholder="" />
              <InputElement text="password" type="password" placeholder="" />
              <p className="pb-6">
                By creating an account you agree with our Terms of Service,
                Privacy Policy,
              </p>
              <div className="flex flex-col gap-5">
                <Button label="Create account" />
                <Button
                  label="Already have an account? Log in"
                  variant="link"
                />
              </div>
            </form>
  )
}

export default SignUpForm