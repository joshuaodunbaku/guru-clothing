// style
import { AuthenticationContainer } from "./Authentication.style";

import SignInForm from "../../components/sign-in-form/sign-in-form";
// import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form";

const Authentication = () => {
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

  return (
    <>
      <AuthenticationContainer>
        <SignInForm />
        {/* <button onClick={signInWithGoogleRedirect}>Sign In With Google Redirect</button> */}
        <SignUpForm />
      </AuthenticationContainer>
    </>
  );
};

export default Authentication;