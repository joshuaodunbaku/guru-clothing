import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase.util";
// components
import FormInput from "../form-input/form-input";
import Button from "../Button/Button";
// styles
import { SignUpContainer } from "./sign-up-form.style";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const { user: newUser } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(newUser, "here from sign-up-form");
      // const userDocRef = await createUserDocumentFromAuth({...newUser, displayName});
      await createUserDocumentFromAuth(newUser, { displayName });
      setFormFields(defaultFormFields);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        console.log("Cannot create user, email already in use");
      } else if (error.code === "auth/weak-password") {
        console.log(error.message);
      } else {
        console.log("User creation encountered an error, " + error.code);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form action="" onSubmit={handleSubmit}>
        <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName"
          value={displayName} />

        <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />

        <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />

        <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword"
          value={confirmPassword} />
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;