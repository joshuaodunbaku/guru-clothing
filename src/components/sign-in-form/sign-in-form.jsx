import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword, signInWithGoogleRedirect } from "../../utils/firebase.util";
// components
import FormInput from "../form-input/form-input";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";
// styles
import { ButtonContainer, SignInContainer } from "./sign-in-form.style.js";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate();

  console.log(formFields);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // alert("Hello from sign in");
      const { user } = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(user, "here's from sign-in-form");
      navigate("/");
      // console.log(user);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Email password incorrect");
          break;
        case "auth/user-not-found":
          alert("User does not exist");
          break;

        default:
          alert(error.message);
          break;
      }
    }
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    navigate("/");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form action="" onSubmit={handleSubmit}>
        <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
        <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />

        <ButtonContainer>
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType={BUTTON_TYPE_CLASSES.google}>Google Sign In</Button>
        </ButtonContainer>
        <Button type="button" onClick={signInWithGoogleRedirect} buttonType={BUTTON_TYPE_CLASSES.inverted}>Google Sign In</Button>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;