import { useState, useContext } from "react";
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase.util";
// components
import FormInput from "../form-input/form-input";
import Button from "../Button/Button";
// styles
import './sign-in-form.style.scss';

const defaultFormFields = {
  email: "",
  password: "",
}
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields;
  
  console.log(formFields);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // alert("Hello from sign in");
      const {user} = await signInAuthUserWithEmailAndPassword(email, password);
      // console.log(user);
    } catch (error) {
      // if(error.code === "auth/wrong-password") {
      //   alert("Email password incorrect");
      // }else if( error.code === "auth/user-not-found" ){
      //   alert("User does not exist");
      // }
      switch (error.code) {
        case "auth/wrong-password":
          alert("Email password incorrect");
          break;
        case "auth/user-not-found":
          alert("User does not exist");
          break;

        default:
          alert(error);
          break;
      }
    }
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = async () => {
   await signInWithGooglePopup();
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]: value})
  }

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form action="" onSubmit={handleSubmit}>
          <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>
          <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>

          <div className="buttons-container">
            <Button type="submit">Sign In</Button>
            <Button type="button" onClick={signInWithGoogle} buttonType={"google"}>Google Sign In</Button>
          </div>
      </form>
    </div>
  )
}

export default SignInForm;