import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase.util";

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRe = createUserDocumentFromAuth(user);
  }
  return (
    <>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google</button>
    </>
  )
}

export default SignIn;