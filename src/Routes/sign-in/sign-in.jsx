import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form";
import { 
  // auth, 
  createUserDocumentFromAuth, 
  signInWithGooglePopup, 
  // signInWithGoogleRedirect 
} from "../../utils/firebase.util";

const SignIn = () => {
  // useEffect(() => {
  //   const fn = async () => {
  //     const response = await getRedirectResult(auth);
  //     console.log(response);
  //     if (response) {
  //       createUserDocumentFromAuth(response.user)
  //     }
  //   }
  //   fn();
  // }, [])

  const logGoogleUserPopup = async () => {
    const {user} = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  }
  return (
    <>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUserPopup}>Sign In With Google Popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>Sign In With Google Redirect</button> */}
      <SignUpForm />
    </>
  )
}

export default SignIn;